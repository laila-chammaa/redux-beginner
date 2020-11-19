//creating an action INCREMENT which returns an object
export const increment = () => {
  return {
    type: "INCREMENT"
  }
}

//creating an action decrement
export const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

export const logIn = () => {
    return {
      type: "SIGN_IN"
    }
  }