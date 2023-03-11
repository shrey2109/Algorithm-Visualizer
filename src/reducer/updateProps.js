const initialState = {
    stackOperation: "",
    sortingColor: "",
    sortingSpeed: 1000,
    play: false,
    push:false,
    pop:false,
    arrVal: [],

    graphAlgorithm:"",
    startPoint : false,
    endPoint: false,
    wallPoint:false,
    weightPoint:false,
    reset:false,
    playSpeed: 300,
    // play: false,
    map: [],
    path: [],
  };
  
  const updateProps = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_COLOR": {
        return { ...state, sortingColor: action.sortingColor };
      }
  
      case "UPDATE_SORTINGALGORITHM": {
        return { ...state, sortingAlgorithm: action.sortingAlgorithm };
      }
  
      case "UPDATE_SPEED": {
        return { ...state, sortingSpeed: action.sortingSpeed };
      }
  
      // case "UPDATE_NUM": {
      //   return { ...state, amt: action.amt };
      // }
      
      case "UPDATE_ARRAY": {
        return { ...state, arrVal: action.arrVal };
      }
  
      case 'PLAY_PAUSE': {
        return {...state,play:action.play};
     }
  
     case 'UPDATE_PUSH': {
      return {...state,pushbtn:action.pushbtn};
    }
  
    case 'UPDATE_POP': {
      return {...state,popbtn:action.popbtn};
    }


//------------------------------------

    case "UPDATE_MAP":{
      return {...state, map: action.map};
  }

     case "UPDATE_GRAPHALGORITHM": {
         return { ...state, graphAlgorithm: action.graphAlgorithm };
       }
   
     case 'START': {
         return {...state,startPoint:action.startPoint};
      }

      case 'END': {
         return {...state,endPoint:action.endPoint};
      }

      case 'WALL': {
         return {...state,wallPoint:action.wallPoint};
      }

      case 'WEIGHT': {
         return {...state,weightPoint:action.weightPoint};
      }

      case 'RESET': {
         return {...state,reset:action.reset};
      }
  



      default:
        return state;
    }
  };
  export default updateProps;
  