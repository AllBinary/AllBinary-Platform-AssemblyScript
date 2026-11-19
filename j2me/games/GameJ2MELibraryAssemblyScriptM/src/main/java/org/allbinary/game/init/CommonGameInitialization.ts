/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.game.init
// import javax.microedition.lcdui.CommandListener
// import org.allbinary.game.resource.ResourceInitialization
// import org.allbinary.game.resource.ResourceLoadingLevelFactory
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvas
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.math.AngleFactory
// import org.allbinary.string.CommonStrings

@global export class CommonGameInitialization extends BaseGameInitialization {

    jclassName(): string {
        return "org.allbinary.game.init.CommonGameInitialization";
    }
    commonStrings: CommonStrings | null = null;

    jfields_CommonGameInitialization(): void {
    this.commonStrings = CommonStrings.getInstance();
    }
    

    jinit_CommonGameInitialization_2(resourceInitializationArray: StaticArray<ResourceInitialization | null> | null, portion: i32): CommonGameInitialization {
        super.jinit_BaseGameInitialization_2(resourceInitializationArray, portion);
        this.jfields_CommonGameInitialization();
        return this;
    }
    

    init(abeClientInformation: AbeClientInformationInterface | null, commandListener: CommandListener | null, level: i32): void {
        super.init(abeClientInformation, commandListener, level); if (JThrowable.pending !== null) return;
        let resourceLoadingLevelFactory: ResourceLoadingLevelFactory | null = ResourceLoadingLevelFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (!this.isGameInitialized() && level == resourceLoadingLevelFactory!.LOAD_ALL!.getLevel()) {
            this.setGameInitialized(true); if (JThrowable.pending !== null) return;
            let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
            SmallIntegerSingletonFactory.getInstance()!.init(); if (JThrowable.pending !== null) return;
            progressCanvas!.addNormalPortion(50, "Integers"); if (JThrowable.pending !== null) return;
            PointFactory.getInstance()!.init(); if (JThrowable.pending !== null) return;
            progressCanvas!.addNormalPortion(50, "Points"); if (JThrowable.pending !== null) return;
            AngleFactory.getInstance(); if (JThrowable.pending !== null) return;
            progressCanvas!.addNormalPortion(50, "Angles"); if (JThrowable.pending !== null) return;
            this.initGame(); if (JThrowable.pending !== null) return;
            this.resourceInitializationArray![this.GAME_RESOURCES]!.init(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.resourceInitialization(level); if (JThrowable.pending !== null) return;
    }
    

    initGame(): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
}

