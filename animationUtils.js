import {
    Easing,
    timing as retiming,
    Clock,
    Value,
    set,
    startClock,
    clockRunning,
    stopClock,
    cond,
    block,
    not,
} from 'react-native-reanimated';


export const timing = (params) => {
    const { clock, easing, duration, from, to } = {
        clock: new Clock(),
        easing: Easing.linear,
        duration: 250,
        from: 0,
        to: 1,
        ...params
    };

    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    };

    const config = {
        toValue: new Value(0),
        duration,
        easing
    };

    return block([
        onInit(clock, [set(config.toValue, to), set(state.frameTime, 0)]),
        animate({
            clock,
            fn: retiming,
            state,
            config,
            from
        })
    ]);
};

export const animate = ({
    fn,
    clock,
    state,
    config,
    from
}) =>
    block([
        onInit(clock, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, from),
            startClock(clock)
        ]),
        fn(clock, state, config),
        cond(state.finished, stopClock(clock)),
        state.position
    ]);

export const onInit = (clock, sequence) => cond(not(clockRunning(clock)), sequence);
