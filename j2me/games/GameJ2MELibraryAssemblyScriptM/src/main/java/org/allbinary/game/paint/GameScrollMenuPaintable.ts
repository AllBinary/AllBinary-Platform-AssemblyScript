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
// package org.allbinary.game.paint
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.ColorChangeEventHandler
// import org.allbinary.graphics.color.ColorChangeListener
// import org.allbinary.graphics.form.FormPaintable
// import org.allbinary.graphics.form.ScrollSelectionForm
// import org.allbinary.graphics.form.item.ABStringComponent
// import org.allbinary.graphics.form.item.ABTextItem
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class GameScrollMenuPaintable extends BasicGameDemoPaintable implements ColorChangeListener {

    jclassName(): string {
        return "org.allbinary.game.paint.GameScrollMenuPaintable";
    }
    

    jinit_GameScrollMenuPaintable_4(mainDemoStatePaintable: Paintable | null, ownershipPaintable: Paintable | null, helpPaintableInterface: Paintable | null, basicColor: BasicColor | null): GameScrollMenuPaintable {
        super.jinit_BasicGameDemoPaintable_3(mainDemoStatePaintable, ownershipPaintable, helpPaintableInterface);
        this.setColor(basicColor); if (JThrowable.pending !== null) return this;
        ColorChangeEventHandler.getInstance()!.addListenerInterface(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setState(state: i32): void {
        this.setCurrentStatePaintable(this.getMainDemoStatePaintable()); if (JThrowable.pending !== null) return;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
    }
    

    setColor(basicColor: BasicColor | null): void {
        let mainGameDemoStatePaintable: MainGameDemoStatePaintable | null = changetype<MainGameDemoStatePaintable | null>(this.getMainDemoStatePaintable()); if (JThrowable.pending !== null) return;
        let formPaintable: FormPaintable | null = changetype<FormPaintable | null>(mainGameDemoStatePaintable!.getMenuPaintableInterface()); if (JThrowable.pending !== null) return;
        let scrollSelectionForm: ScrollSelectionForm | null = changetype<ScrollSelectionForm | null>(formPaintable!.getForm()); if (JThrowable.pending !== null) return;
        mainGameDemoStatePaintable!.getOwnershipPaintableInterface()!.setBasicColorP(basicColor); if (JThrowable.pending !== null) return;
        scrollSelectionForm!.setButtonBasicColor(basicColor); if (JThrowable.pending !== null) return;
        let item: ABTextItem | null = null;
        let stringComponent: ABStringComponent | null = null;
        for (let index: i32 = scrollSelectionForm!.size() - 1; index >= 0; index--) {
            item = changetype<ABTextItem | null>(scrollSelectionForm!.get(index)); if (JThrowable.pending !== null) return;
            stringComponent = item!.getLabelStringComponent(); if (JThrowable.pending !== null) return;
            if (stringComponent != null) {
                stringComponent!.setForegroundBasicColor(basicColor); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

