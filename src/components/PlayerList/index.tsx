import React from "react";
import Player from "../../models/Player";
import { Typography, Table } from "antd";
import { StyledContainer } from "./style";
const { Paragraph } = Typography;

const columns = [
  {
    title: "Nome",
    dataIndex: "name"
  },
  {
    title: "Level",
    dataIndex: "level"
  },
  {
    title: "Vocação",
    dataIndex: "vocation"
  },
  {
    title: "Ação",
    dataIndex: "action"
  }
];

const PlayerList: React.FC<PlayerListProps> = props => {
  return (
    <StyledContainer>
      <Table
        rowKey="name"
        dataSource={props.players.map(player => {
          return {
            ...player,
            action: <Paragraph copyable={{ text: player.name }} />
          };
        })}
        columns={columns}
        size="small"
        pagination={{ pageSize: 3 }}
      ></Table>
    </StyledContainer>
  );
};

interface PlayerListProps {
  players: Player[];
}

export default PlayerList;
