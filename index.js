function BoardMember(name, homestate, training) {
  this.name = name
  this.homeState = homestate
  this.training = training

  function this.veto() {
    return ("No, I must disagree")
  }
}
