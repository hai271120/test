const a = [
    {
      name: "Arsenal",
      points: 99,
      GD: 45,
    },
    {
      name: "Chelsea",
      points: 75,
      GD: 39,
    },
    {
      name: "Manchester United",
      points: 60,
      GD: 29,
    },{
      name: "Liverpool",
      points: 88,
      GD: 39,
    }
  ]
  let sapxep = doi => doi.sort((x, y) => {
    if (x.points !== y.points)
    {
      return y.points - x.points
    }
    if(x.GD!==y.GD){
        return y.GD -x.GD
    }
  })
  console.log(sapxep(a))
