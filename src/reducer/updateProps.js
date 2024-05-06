const initialState = {
  stackOperation: '',
  sortingColor: '',
  sortingAlgorithm: '',
  sortingSpeed: 1000,
  sortplay: false,
  graphplay: false,
  push: false,
  pop: false,
  arrVal: [],
  arrValStack: [],
  arrValQueue: [],

  graphAlgorithm: '',
  startPoint: false,
  endPoint: false,
  wallPoint: false,
  weightPoint: false,
  reset: false,
  playSpeed: 300,
  map: [],
  path: [],

  searchingAlgorithm: '',
  searchingColor: '',
  searchingSpeed: 1000,
  arrValSearch: [],
  searchplay: false,
  searchVal: 0,
  isfound: false,
  isnotfound: false,
};

const updateProps = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_STATE': {
      return initialState;
    }

    case 'UPDATE_COLOR': {
      return { ...state, sortingColor: action.sortingColor };
    }

    case 'UPDATE_SORTINGALGORITHM': {
      return { ...state, sortingAlgorithm: action.sortingAlgorithm };
    }

    case 'UPDATE_SPEED': {
      return { ...state, sortingSpeed: action.sortingSpeed };
    }

    case 'UPDATE_ARRAY': {
      return { ...state, arrVal: action.arrVal };
    }

    case 'PLAY_PAUSE': {
      return { ...state, sortplay: action.sortplay };
    }

    case 'UPDATE_PUSH_STACK': {
      return { ...state, pushstack: action.pushstack };
    }

    case 'UPDATE_POP_STACK': {
      return { ...state, popstack: action.popstack };
    }

    case 'UPDATE_PUSH_QUEUE': {
      return { ...state, pushqueue: action.pushqueue };
    }

    case 'UPDATE_POP_QUEUE': {
      return { ...state, popqueue: action.popqueue };
    }

    case 'UPDATE_ARRAY_STACK': {
      return { ...state, arrValStack: action.arrValStack };
    }

    case 'UPDATE_ARRAY_QUEUE': {
      return { ...state, arrValQueue: action.arrValQueue };
    }

    //------------------------------------

    case 'PLAY_PAUSE_GRAPH': {
      return { ...state, graphplay: action.graphplay };
    }

    case 'UPDATE_MAP': {
      return { ...state, map: action.map };
    }

    case 'UPDATE_GRAPHALGORITHM': {
      return { ...state, graphAlgorithm: action.graphAlgorithm };
    }

    case 'START': {
      return { ...state, startPoint: action.startPoint };
    }

    case 'END': {
      return { ...state, endPoint: action.endPoint };
    }

    case 'WALL': {
      return { ...state, wallPoint: action.wallPoint };
    }

    case 'WEIGHT': {
      return { ...state, weightPoint: action.weightPoint };
    }

    case 'RESET': {
      return { ...state, reset: action.reset };
    }

    case 'UPDATE_SEARCHINGCOLOR': {
      return { ...state, searchingColor: action.searchingColor };
    }

    case 'UPDATE_SEARCHINGALGORITHM': {
      return { ...state, searchingAlgorithm: action.searchingAlgorithm };
    }

    case 'UPDATE_SEARCHINGSPEED': {
      return { ...state, searchingSpeed: action.searchingSpeed };
    }

    case 'UPDATE_SEARCH_ARRAY': {
      return { ...state, arrValSearch: action.arrValSearch };
    }
    case 'Found': {
      return { ...state, isfound: action.isfound };
    }

    case 'NotFound': {
      return { ...state, isnotfound: action.isnotfound };
    }

    case 'PLAY': {
      // return {...state,play:action.play};
      return { ...state, searchplay: action.searchplay };
    }

    case 'UPDATE_NUM': {
      return { ...state, searchVal: action.searchVal };
    }

    default:
      return state;
  }
};
export default updateProps;
