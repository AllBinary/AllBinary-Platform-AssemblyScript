// Generated Code Do Not Modify
// package org.allbinary.view
// import org.allbinary.game.configuration.event.GameInitializedListenerInterface
// import org.allbinary.game.midlet.DemoGameMidletEventListener
// import org.allbinary.midlet.MidletCompositeInterface

@global export interface AllBinaryMidletViewInterface extends MidletCompositeInterface /* Java also extends EmulatorViewInterface DemoGameMidletEventListener GameInitializedListenerInterface */ {
    

    onResume(): void;
    

    onPause(): void;
    

    onDestroy(): void;

    setMidlet(p0: MIDlet | null): void;

    onEmulatorInitComplete(p0: Object | null): void;

    onSetDisplayable(p0: Displayable | null): void;

    onDemoStart(): void;

    onGameStart(): void;

    onDemoGameMidletEvent(p0: DemoGameMidletEvent | null): void;

    onGameInitialized(p0: GameInitializedEvent | null): void;
}

