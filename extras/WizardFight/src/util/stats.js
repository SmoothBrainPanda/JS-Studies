function statsMod(job, stats) {
  switch (job) {
    case "barbarian":
      return {
        str: stats.str + 3,
        dex: stats.dex - 2,
        int: stats.int - 1,
        wis: stats.wis - 1,
        con: stats.con + 2,
      };
    case "ranger":
      return {
        str: stats.str,
        dex: stats.dex,
        int: stats.int,
        wis: stats.wis,
        con: stats.con,
      };
    case "wizard":
      return {
        str: stats.str,
        dex: stats.dex,
        int: stats.int,
        wis: stats.wis,
        con: stats.con,
      };
    case "fighter":
      return {
        str: stats.str,
        dex: stats.dex,
        int: stats.int,
        wis: stats.wis,
        con: stats.con,
      };
    default:
      return {
        str: 7,
        dex: 7,
        int: 7,
        wis: 7,
        con: 7,
        atk: 10,
        def: 10,
      };
  }
}

export default statsMod;
