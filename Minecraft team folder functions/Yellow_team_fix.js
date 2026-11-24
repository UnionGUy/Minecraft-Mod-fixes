function handleJoinTeamYellow(response, gamertagName) {
  if (response === "unknown command") {
    return {
      code: 2964,
      gamertag_name: gamertagName,
      color: "Yellow",
      highlight: "gamer_tag"
    };
  }

  return "successfully joined Yellow Team";
}
