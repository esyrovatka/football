"use client";
import React, { ChangeEvent, FC, Fragment, useId, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, MenuItem, Select } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const defaultListPlayer = ["Mikola", "Svitlana", "Miroslav", "Darina", "Suzanna", "Maksim"];

const DndPage: FC = () => {
  const [newSession, setNewSession] = useState({
    master: "",
    players: [
      {
        id: 1,
        name: "Mikola",
      },
    ],
  });

  const handleChangePlayers = (id: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewSession(prev => ({
      ...prev,
      players: prev.players.map(player => (player.id === id ? { ...player, name: value } : player)),
    }));
  };

  const handleChangeNewSession = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewSession(prev => ({ ...prev, [name]: value }));
  };

  const deletePlayer = (id: number) => () => {
    setNewSession(prev => ({ ...prev, players: prev.players.filter(player => player.id !== id) }));
  };

  const addNewPlayer = () => {
    const id = uuidv4();
    setNewSession(prev => ({ ...prev, players: [...prev.players, { id, name: defaultListPlayer[0] }] }));
  };

  return (
    <Box component="section" display="flex" alignItems="center" flexDirection="column" gap={8}>
      <TextField id="outlined-basic" name="master" label="Master" variant="outlined" value={newSession.master} onChange={handleChangeNewSession} />
      <Box component="div" display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={6}>
        {newSession.players.map(player => (
          <Box sx={{ position: "relative", width: 160 }} key={`players-list-${player.id}`}>
            <Button onClick={deletePlayer(player.id)} sx={{ position: "absolute", right: -30, top: -30, cursor: "pointer", minWidth: 20 }}>
              <DeleteOutlinedIcon />
            </Button>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={player.name}
              onChange={handleChangePlayers(player.id)}
            >
              {defaultListPlayer.map(item => (
                <MenuItem value={item} key={`default-name-list-${item}`}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Box>
        ))}
      </Box>
      <Button onClick={addNewPlayer}>+ Add new Player</Button>

      <Link href={`dnd/1/1`}>
        <Button>Start Game</Button>
      </Link>
    </Box>
  );
};

export default DndPage;
