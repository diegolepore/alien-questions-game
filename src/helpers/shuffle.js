Array.prototype.shuffle = function() {
  for(let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const randomItem = this[j]
    this[j] = this[i]
    this[i] = randomItem
  }
  
  return this
}