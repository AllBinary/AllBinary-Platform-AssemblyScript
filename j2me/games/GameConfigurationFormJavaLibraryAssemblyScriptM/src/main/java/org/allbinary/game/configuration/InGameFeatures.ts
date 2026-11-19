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
// package org.allbinary.game.configuration
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureChoiceGroups
// import org.allbinary.game.configuration.feature.InGameFeatureChoiceGroups
// import org.allbinary.game.configuration.feature.SensorFeatureFactory
// import org.allbinary.game.configuration.feature.TouchFeatureFactory
// import org.allbinary.init.Init
// import org.allbinary.input.gyro.OrientationData
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class InGameFeatures extends Init {

    jclassName(): string {
        return "org.allbinary.game.configuration.InGameFeatures";
    }

    jinit_InGameFeatures_0(): InGameFeatures {
        super.jinit_Init_0();
        return this;
    }
    

    init(): void {
        let LABEL: string | null = "Screen Buttons";
        let orientationData: OrientationData | null = OrientationData.getInstance(); if (JThrowable.pending !== null) return;
        let exclusiveOrientationSensorVector: BasicArrayList | null = changetype<BasicArrayList | null>(GameFeatureChoiceGroups.getExclusiveInstance()!.get()!.get(changetype<Object | null>(orientationData!.ORIENTATION_SENSOR_INPUT))); if (JThrowable.pending !== null) return;
        let inGameFeatureChoiceGroups: InGameFeatureChoiceGroups | null = InGameFeatureChoiceGroups.getExclusiveInstance(); if (JThrowable.pending !== null) return;
        if (exclusiveOrientationSensorVector != null) {
            let inGameExclusiveOrientationSensorVectorCanBeNull: Object | null = inGameFeatureChoiceGroups!.get()!.get(changetype<Object | null>(orientationData!.ORIENTATION_SENSOR_INPUT)); if (JThrowable.pending !== null) return;
            if (inGameExclusiveOrientationSensorVectorCanBeNull == null) {
                this.addToInGameMenu(); if (JThrowable.pending !== null) return;
            } else {
                let inGameExclusiveOrientationSensorVector: BasicArrayList | null = changetype<BasicArrayList | null>(inGameExclusiveOrientationSensorVectorCanBeNull);
                if (inGameExclusiveOrientationSensorVector!.size() == 0) {
                    this.addToInGameMenu(); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        if (features!.isFeature(TouchFeatureFactory.getInstance()!.SHOW_SCREEN_BUTTONS) || features!.isFeature(TouchFeatureFactory.getInstance()!.AUTO_HIDE_SHOW_SCREEN_BUTTONS) || features!.isFeature(TouchFeatureFactory.getInstance()!.HIDE_SCREEN_BUTTONS)) {
            let exclusiveScreenButtonsVector: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
            let touchFeatureFactory: TouchFeatureFactory | null = TouchFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
            exclusiveScreenButtonsVector!.add(touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS); if (JThrowable.pending !== null) return;
            exclusiveScreenButtonsVector!.add(touchFeatureFactory!.SHOW_SCREEN_BUTTONS); if (JThrowable.pending !== null) return;
            exclusiveScreenButtonsVector!.add(touchFeatureFactory!.HIDE_SCREEN_BUTTONS); if (JThrowable.pending !== null) return;
            inGameFeatureChoiceGroups!.add(LABEL, exclusiveScreenButtonsVector); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addToInGameMenu(): void {
        let orientationData: OrientationData | null = OrientationData.getInstance(); if (JThrowable.pending !== null) return;
        let inGameExclusiveOrientationSensorVector: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
        inGameExclusiveOrientationSensorVector!.add(SensorFeatureFactory.getInstance()!.ORIENTATION_SENSORS); if (JThrowable.pending !== null) return;
        inGameExclusiveOrientationSensorVector!.add(SensorFeatureFactory.getInstance()!.NO_ORIENTATION); if (JThrowable.pending !== null) return;
        InGameFeatureChoiceGroups.getExclusiveInstance()!.add(orientationData!.ORIENTATION_SENSOR_INPUT, inGameExclusiveOrientationSensorVector); if (JThrowable.pending !== null) return;
    }
    

    isAny(): bool {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return false;
        let touchFeatureFactory: TouchFeatureFactory | null = TouchFeatureFactory.getInstance(); if (JThrowable.pending !== null) return false;
        if (features!.isFeature(touchFeatureFactory!.SHOW_SCREEN_BUTTONS) || features!.isFeature(touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS) || features!.isFeature(touchFeatureFactory!.HIDE_SCREEN_BUTTONS)) {
            return true;
        } if (JThrowable.pending !== null) return false;
        let exclusiveOrientationSensorVector: BasicArrayList | null = changetype<BasicArrayList | null>(GameFeatureChoiceGroups.getExclusiveInstance()!.get()!.get(changetype<Object | null>(OrientationData.getInstance()!.ORIENTATION_SENSOR_INPUT))); if (JThrowable.pending !== null) return false;
        if (exclusiveOrientationSensorVector != null) {
            return true;
        }
        return false;
    }
}

