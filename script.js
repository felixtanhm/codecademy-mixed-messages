const messages = ["message1","message2","message3","message4","message5","message6","message7","message8","message9","message10"]
const firstName = ["name1", "name2", "name3", "name4", "name5"]
const lastName = ["last1", "last2", "last3", "last4", "last5"]

const randomizer = int => {
    return Math.floor(Math.random() * int) 
}

const selectOption = messagePortion => {
    if(messagePortion == "messages") {
        let arrIndex = randomizer(messages.length - 1)
        return messages[arrIndex]
    } else if (messagePortion == "firstName") {
        let arrIndex = randomizer(firstName.length -1) 
        return firstName[arrIndex]
    } else {
        let arrIndex = randomizer(lastName.length -1) 
        return lastName[arrIndex]
    }
}

const msgConstruct = () => {
    return `Hi ${selectOption("firstName")} ${selectOption("lastName")}! ${selectOption("messages")}`
}

console.log(msgConstruct())
