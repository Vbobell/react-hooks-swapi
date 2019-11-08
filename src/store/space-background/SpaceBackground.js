import Star from '../../models/Star';

export const TYPES = {
    FILL_STARS: 'FILL_STARS',
    RENDER_STARS: 'RENDER_STARS',
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
    state.canvas = canvas;
    state.innerWidth = innerWidth;
    state.innerHeight = innerHeight;

    canvas.setAttribute('width', innerWidth);
    canvas.setAttribute('height', innerHeight);

    for(var i = 0; i < state.numStars; i++) {
        var x = Math.round(Math.random() * innerWidth);
        var y = Math.round(Math.random() * innerHeight);
        var opacity = Math.random() * 0.5;

        var star = new Star(x, y, opacity, canvas);
        
        state.stars.push(star);
    }

    return dispatch({
        type: TYPES.FILL_STARS,
        state
    });
}

export async function renderStar(state, dispatch) {
    console.log(state);
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

export default spaceBackgroundReducer;