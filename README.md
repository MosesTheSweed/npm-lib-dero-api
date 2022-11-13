# React Dero Api
### *** UNDER DEVELOPMENT -- DO NOT USE ***

## Description:
This is an npm package consisting of a functional component hook for each Dero API call available 
in the dependency package 'dero-rpc-bridge-api', which is a dependency of this package

## Usage
The response object is generalized for every hook and managed by a React Context.
There is a React Context for the bridge as well -- Both need to be wrapped around a component where 
it makes sense, perhaps like this if it were in main.js:
```
export const Providers = ({children}) => {
  return (
    <BridgeProvider>
      <ApiResponseProvider>
        {children}
      </ApiResponseProvider>
    </BridgeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
)
```

Then, within a component where you want to make a Dero API call, for example 
`getTxPool`, you would use the hook like this:

