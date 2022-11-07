const userStack = {
    language: 'JS',
    framework: 'React'
}

const user = {
    user: 'Kary',
    age: 28,
    ...userStack
}

console.log(user);
