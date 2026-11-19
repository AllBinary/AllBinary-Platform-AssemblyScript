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
// package org.allbinary.game.input.mapping
// import javax.microedition.lcdui.Canvas
// import org.allbinary.game.input.GameKey
// import org.allbinary.game.input.GameKeyFactory
// import org.allbinary.game.input.Input
// import org.allbinary.game.input.InputFactory
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class InputToGameKeyMapping extends InputMapping {

    jclassName(): string {
        return "org.allbinary.game.input.mapping.InputToGameKeyMapping";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!InputToGameKeyMapping.js_instance) {
            InputToGameKeyMapping.js_instance = true;
            InputToGameKeyMapping.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return InputToGameKeyMapping.jv_instance;
    }
    static set instance(value: Object | null) {
        InputToGameKeyMapping.js_instance = true;
        InputToGameKeyMapping.jv_instance = value;
    }
    gameKeyFactory: GameKeyFactory | null = null;
    mappedGameKeys: StaticArray<GameKey | null> | null = null;
    platformToGameKeyMapping: StaticArray<GameKey | null> | null = null;
    negativePlatformToGameKeyMapping: StaticArray<GameKey | null> | null = null;

    jfields_InputToGameKeyMapping(): void {
    this.gameKeyFactory = GameKeyFactory.getInstance();
    this.mappedGameKeys = StaticArray.fromArray<GameKey | null>([this.gameKeyFactory!.UP, this.gameKeyFactory!.DOWN, this.gameKeyFactory!.LEFT, this.gameKeyFactory!.RIGHT]);
    this.platformToGameKeyMapping = new StaticArray<GameKey | null>(InputFactory.getInstance()!.MAX);
    this.negativePlatformToGameKeyMapping = new StaticArray<GameKey | null>(0);
    }
    

    static getNullInstance(): InputToGameKeyMapping | null {
        if (InputToGameKeyMapping.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            InputToGameKeyMapping.instance = new InputToGameKeyMapping().jinit_InputToGameKeyMapping_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<InputToGameKeyMapping | null>(InputToGameKeyMapping.instance);
    }
    

    jinit_InputToGameKeyMapping_0(): InputToGameKeyMapping {
        super.jinit_InputMapping_0();
        this.jfields_InputToGameKeyMapping();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.clear(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    clear(): void {
        for (let index: i32 = this.platformToGameKeyMapping!.length - 1; index >= 0; index--) {
            this.platformToGameKeyMapping![index] = this.gameKeyFactory!.NONE;
        }
    }
    

    removeAll(): void {
        super.removeAll(); if (JThrowable.pending !== null) return;
        this.clear(); if (JThrowable.pending !== null) return;
    }
    

    addMapping(inputToGameKeyMapping: InputToGameKeyMapping | null): void {
        for (let index: i32 = inputToGameKeyMapping!.getMaxMappable() - 1; index >= 0; index--) {
            let input: Input | null = inputToGameKeyMapping!.getInstance1(index); if (JThrowable.pending !== null) return;
            if (input != this.gameKeyFactory!.NONE) {
                this.addAll(input, inputToGameKeyMapping!.getMappedInput(input)); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addAll(input: Input | null, list: BasicArrayList | null): void {
        for (let index: i32 = list!.size() - 1; index >= 0; index--) {
            let mappedToInput: Input | null = changetype<Input | null>(list!.objectArray![index]);
            this.add(input, mappedToInput); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    add(input: Input | null, mappedToInput: Input | null): void {
        super.add(input, mappedToInput); if (JThrowable.pending !== null) return;
        this.set(input, mappedToInput); if (JThrowable.pending !== null) return;
    }
    

    remove(input: Input | null, mappedToInput: Input | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString1(input))!.append(" == ")!.append(StringUtil.getInstance()!.toString1(mappedToInput))), this, "InputToGameKeyMapping::remove"); if (JThrowable.pending !== null) return;
        super.remove(input, mappedToInput); if (JThrowable.pending !== null) return;
        this.set(input, this.gameKeyFactory!.NONE); if (JThrowable.pending !== null) return;
    }
    

    set(input: Input | null, mappedToInput: Input | null): void {
        let id: i32 = mappedToInput!.getId(); if (JThrowable.pending !== null) return;
        if (id >= 0 && id < this.platformToGameKeyMapping!.length) {
            this.platformToGameKeyMapping![id] = changetype<GameKey | null>(input);
        }
    }
    

    getMaxMappable(): i32 {
        return this.platformToGameKeyMapping!.length;
    }
    

    getReverseInstance(id: i32): BasicArrayList | null {
        let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let inputFactory: InputFactory | null = InputFactory.getInstance(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < this.platformToGameKeyMapping!.length; index++) {
            if (this.platformToGameKeyMapping![index]!.getId() == id) {
                let input: Input | null = inputFactory!.getInstanceById(index); if (JThrowable.pending !== null) return null;
                if (input != null) {
                    list!.add(input); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return list;
    }
    

    initGameKey(canvas: Canvas | null, gameKey: GameKey | null): void {
        let key: i32 = canvas!.getKeyCode(gameKey!.getId()); if (JThrowable.pending !== null) return;
        if (key < 0 && -key < this.negativePlatformToGameKeyMapping!.length) {
            this.negativePlatformToGameKeyMapping![-key] = gameKey;
        } else if (key > 0) {
            if (this.platformToGameKeyMapping![key] == this.gameKeyFactory!.NONE) {
                this.platformToGameKeyMapping![key] = gameKey;
            }
        } else {
            PreLogUtil.putOE(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(JObject.jtoString(gameKey))!.append(CommonSeps.getInstance()!.COLON_SEP)!.appendint(key)), this, this.commonStrings!.INIT, new JException().jinit_JException_0()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getSmallestCanvasGameKeyCode(canvas: Canvas | null): i32 {
        let nextKey: i32 = 0;
        let smallestKey: i32 = 0;
        for (let index: i32 = this.mappedGameKeys!.length; --index >= 0; ) {
            nextKey = canvas!.getKeyCode(this.mappedGameKeys![index]!.getId()); if (JThrowable.pending !== null) return 0;
            if (nextKey < smallestKey) {
                smallestKey = nextKey;
            }
        } if (JThrowable.pending !== null) return 0;
        return smallestKey;
    }
    

    init(canvas: Canvas | null): void {
        do {
            let negativePlatformToGameKeyMapping: StaticArray<GameKey | null> | null = new StaticArray<GameKey | null>(0);
            let smallestKey: i32 = this.getSmallestCanvasGameKeyCode(canvas); if (JThrowable.pending !== null) break;
            if (smallestKey < 0) {
                smallestKey--;
                if (smallestKey < -256) {
                    smallestKey = -256;
                }
                negativePlatformToGameKeyMapping = new StaticArray<GameKey | null>(-smallestKey);
                for (let index: i32 = negativePlatformToGameKeyMapping!.length; --index >= 0; ) {
                    negativePlatformToGameKeyMapping![index] = this.gameKeyFactory!.NONE;
                }
                this.negativePlatformToGameKeyMapping = negativePlatformToGameKeyMapping;
            }
            for (let index: i32 = this.mappedGameKeys!.length; --index >= 0; ) {
                this.initGameKey(canvas, this.mappedGameKeys![index]); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let t: JThrowable | null = changetype<JThrowable | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, t); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getInstanceForCanvas(canvas: Canvas | null, id: i32): GameKey | null {
        if (id >= 0 && id < this.platformToGameKeyMapping!.length) {
            return this.platformToGameKeyMapping![id];
        } else if (id < 0 && -id < this.negativePlatformToGameKeyMapping!.length) {
            return this.negativePlatformToGameKeyMapping![-id];
        } else {
            return this.gameKeyFactory!.NONE;
        }
        return null;
    }
    

    getInstance1(id: i32): GameKey | null {
        if (id >= 0 && id < this.platformToGameKeyMapping!.length) {
            return this.platformToGameKeyMapping![id];
        } else if (id < 0 && -id < this.negativePlatformToGameKeyMapping!.length) {
            return this.negativePlatformToGameKeyMapping![-id];
        } else {
            return this.gameKeyFactory!.NONE;
        }
        return null;
    }
}

