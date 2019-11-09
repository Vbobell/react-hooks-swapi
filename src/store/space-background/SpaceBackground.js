import Star from '../../models/Star';

export const TYPES = {
    FILL_STARS: 'FILL_STARS',
    RENDER_STARS: 'RENDER_STARS',
    SET_CANVAS_DIMENSIONS: 'SET_CANVAS_DIMENSIONS',
    ERROR: 'ERROR'
};

export const spaceBackgroundStore = {
    fps: 50,
    numStars: 300,
    innerWidth: null,
    innerHeight: null,
    canvas: null,
    stars: []
};

const spaceBackgroundReducer = (state = spaceBackgroundStore, action) => {
    switch (action.type) {
    case TYPES.FILL_STARS:
    case TYPES.SET_CANVAS_DIMENSIONS:
        return {
            ...state,
            state: action.state
        };
    case TYPES.RENDER_STARS:
        return {
            ...state
        };
    case TYPES.ERROR:
        return {
            ...state
        };
    default:
        return state;
    }
};

export async function setStar(state, dispatch, { canvas, innerWidth, innerHeight }) {
    const paramsFill = {
        numStars: state.numStars,
        diffHeight: 0 
    };

    state.canvas = canvas;
    state.innerWidth = innerWidth;
    state.innerHeight = innerHeight;

    canvas.setAttribute('width', innerWidth);
    canvas.setAttribute('height', innerHeight);

    return fillStars(state, dispatch, paramsFill);
}

export async function renderStar(state, dispatch) {
    let ctx = state.canvas.getContext('2d');

    ctx.clearRect(0, 0, state.innerWidth, state.innerHeight);

    state.stars.forEach(function(star) {
        star.draw();
    });

    return dispatch({
        type: TYPES.RENDER_STARS,
        state
    });
}

export function fillStars(state, dispatch, { numStars, diffHeight }) {
    for(var i = 0; i < numStars; i++) {
        var x = Math.round(Math.random() * state.innerWidth);
        var y = Math.round(Math.random() * state.innerHeight) + diffHeight;
        var opacity = Math.random() * 0.5;

        var star = new Star(x, y, opacity, state.canvas);
        
        state.stars.push(star);
    }

    state.numStars = numStars;

    return dispatch({
        type: TYPES.FILL_STARS,
        state
    });
}

export async function setCanvasDimensions(state, dispatch, {clientWidth, clientHeight}) {
    state.innerWidth = clientWidth;
    state.innerHeight = clientHeight;

    state.canvas.setAttribute('width', clientWidth);
    state.canvas.setAttribute('height', clientHeight);

    return dispatch({
        type: TYPES.SET_CANVAS_DIMENSIONS,
        state
    });
}

export default spaceBackgroundReducer;