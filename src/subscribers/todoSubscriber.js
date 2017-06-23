const todoSubscriber = (data) => {
    localStorage.setItem('todo', JSON.stringify(data)) 
}

export default todoSubscriber