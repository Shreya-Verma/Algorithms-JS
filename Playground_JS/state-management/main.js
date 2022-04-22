(function initiate() {
  const $counter = document.querySelector("#counter");
  const $increment = document.querySelector("#increment");
  const $decrement = document.querySelector("#decrement");
  const $reset = document.querySelector("#reset");

  function reducer(state, action) {
    switch (action) {
      case "INCREMENT":
        state.counter = state.counter + 1;
        break;
      case "DECREMENT":
        state.counter = state.counter - 1;
        break;
      case "RESET":
      default:
        state.counter = 0;
        break;
    }

    return state;
  }

  function createStore(initialState, reducer) {
    const proxyState = new Proxy(
      { value: initialState },
      {
        set(state, key, value) {
          state[key] = value;
          console.log(`stateChange: ${key}: ${value}`);
          updateUI();
        },
      }
    );

    function getState() {
      return { ...proxyState.value };
    }

    function dispatch(action) {
      const prevState = getState();
      proxyState.value = reducer(prevState, action);
    }

    return {
      getState,
      dispatch,
    };
  }

  const initialState = { counter: 0 };
  const store = createStore(initialState, reducer);

  function updateUI() {
    $counter.innerText = store.getState().counter;
  }

  $increment.addEventListener("click", () => {
    store.dispatch("INCREMENT");
  });
  $decrement.addEventListener("click", () => {
    store.dispatch("DECREMENT");
  });
  $reset.addEventListener("click", () => {
    store.dispatch("RESET");
  });
})();
