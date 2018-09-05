function BoardMember(name, homestate, training) {
  this.name = name
  this.homeState = homestate
  this.training = training

  function this.veto() {
    console.log("No, I must disagree")
  }
}
