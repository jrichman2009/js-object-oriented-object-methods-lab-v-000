function BoardMember(name, homestate, training) {
  this.name = name
  this.homeState = homestate
  this.training = training
  this.veto = function() {
    return "No, I must disagree"
  }
  this.doCharity = function() {
    return "I like to help people."
  }

  this.approve = function() {
    return "You can do that!"

  }


}
