function BoardMember(name, homestate, training) {
  this.name = name
  this.homeState = homestate
  this.training = training

  function veto() {
    console.log("No, I must disagree")
  }
}
