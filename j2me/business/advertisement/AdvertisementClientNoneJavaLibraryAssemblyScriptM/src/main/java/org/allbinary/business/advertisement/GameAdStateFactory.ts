// Generated Code Do Not Modify
// package org.allbinary.business.advertisement
// import org.allbinary.game.GameAdState
// import org.allbinary.logic.system.SoftwareInformation

@global export class GameAdStateFactory extends JObject implements GameAdStateFactoryInterface {

    jclassName(): string {
        return "org.allbinary.business.advertisement.GameAdStateFactory";
    }
    @lazy static jv_instance: GameAdStateFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameAdStateFactory | null {
        if (!GameAdStateFactory.js_instance) {
            GameAdStateFactory.js_instance = true;
            GameAdStateFactory.jv_instance = new GameAdStateFactory().jinit_GameAdStateFactory_0();
        }
        return GameAdStateFactory.jv_instance;
    }
    static set instance(value: GameAdStateFactory | null) {
        GameAdStateFactory.js_instance = true;
        GameAdStateFactory.jv_instance = value;
    }
    gameAdStateArray: StaticArray<GameAdState | null> | null = null;
    gameAdState: GameAdState | null = null;

    jfields_GameAdStateFactory(): void {
    this.gameAdStateArray = StaticArray.fromArray<GameAdState | null>([new GameAdState().jinit_GameAdState_1(new AppNameLicensingAdConfiguration().jinit_AppNameLicensingAdConfiguration_0())]);
    this.gameAdState = this.gameAdStateArray![0];
    }

    jinit_GameAdStateFactory_0(): GameAdStateFactory {
        super.jinit_JObject_0();
        this.jfields_GameAdStateFactory();
        return this;
    }
    

    static getInstance(): GameAdStateFactory | null {
        return GameAdStateFactory.instance;
    }
    

    getCurrentInstance(): GameAdState | null {
        return this.gameAdState;
    }
    

    getInstanceForApp(softwareInformation: SoftwareInformation | null): GameAdStateBase | null {
        this.gameAdState = this.gameAdStateArray![0];
        return this.gameAdStateArray![0];
    }
    

    isEnabled(): bool {
        return false;
    }
}

