import React, { useState, useEffect } from "react";
import { Button, Checkbox, Input, Select, Row, Col } from "antd";
import { StyledHome, HomeContainer, StyledCard } from "./style";
import {
  getWorlds,
  getPlayersOnlineByWorld
} from "../../services/World.service";
import PlayerList from "../../components/PlayerList";
import Player from "../../models/Player";
import World from "../../models/World";
import { canParty } from "../../utils/Player.utils";
const { Option } = Select;

const Home: React.FC<HomeProps> = () => {
  const [worlds, setWorlds] = useState<World[]>([]);
  const [level, setLevel] = useState<number>(0);
  const [worldSelected, setWorldSelected] = useState<string>("");
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { allworlds } = await getWorlds();
    setWorlds(allworlds);
  }

  function handleChangeWorld(
    value: string | any,
    option: React.ReactElement<any>
  ) {
    setWorldSelected(value);
  }

  function handleChangeLevel(e: React.ChangeEvent<HTMLInputElement>) {
    setLevel(+e.target.value);
  }

  async function handleSubmit() {
    const players = await getPlayersOnlineByWorld(worldSelected);
    setPlayers(players);
  }

  const playersFiltered = players.filter(player =>
    canParty(level, player.level)
  );
  return (
    <StyledHome>
      <StyledCard>
        <h1>Tibia Party</h1>
        <HomeContainer>
          <Input
            placeholder="My Level"
            allowClear
            inputMode="numeric"
            onChange={handleChangeLevel}
          />

          <Select
            placeholder="My World"
            showSearch
            onSelect={handleChangeWorld}
          >
            {worlds.map(world => {
              return (
                <Option key={world.name} value={world.name}>
                  {world.name}
                </Option>
              );
            })}
          </Select>

          <Checkbox.Group>
            <Row>
              <Col span={12}>
                <Checkbox>Druid</Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox>Knight</Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox>Sorcerer</Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox>Paladin</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
          <Button type="primary" onClick={handleSubmit}>
            Search
          </Button>
        </HomeContainer>
      </StyledCard>

      <PlayerList players={playersFiltered} />
    </StyledHome>
  );
};

interface HomeProps {}

export default Home;
