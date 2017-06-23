const logerSubscriber = (data) => {
  localStorage.setItem('logers', JSON.stringify(data));
}

export default logerSubscriber