// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function  destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const diff = [...drivers, name]
  return diff
}

function prependDriver(name) {
  const diff = [name,...drivers]
  return diff
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver() {
   return drivers.slice(1)
}
