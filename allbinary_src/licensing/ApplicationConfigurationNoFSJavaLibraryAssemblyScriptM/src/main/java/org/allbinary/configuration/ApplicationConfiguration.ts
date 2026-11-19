// Generated Code Do Not Modify
// package org.allbinary.configuration
// import org.allbinary.game.configuration.feature.Feature
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.MainFeatureFactory
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings

@global export class ApplicationConfiguration extends JObject {

    jclassName(): string {
        return "org.allbinary.configuration.ApplicationConfiguration";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!ApplicationConfiguration.js_instance) {
            ApplicationConfiguration.js_instance = true;
            ApplicationConfiguration.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return ApplicationConfiguration.jv_instance;
    }
    static set instance(value: Object | null) {
        ApplicationConfiguration.js_instance = true;
        ApplicationConfiguration.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    fullscreen: bool = false;
    showTitleBar: bool = false;
    progressBarView: bool = false;

    jfields_ApplicationConfiguration(): void {
    this.logUtil = LogUtil.getInstance();
    this.fullscreen = true;
    this.showTitleBar = false;
    this.progressBarView = false;
    }
    

    static getInstance(): ApplicationConfiguration | null {
        if (ApplicationConfiguration.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            ApplicationConfiguration.instance = new ApplicationConfiguration().jinit_ApplicationConfiguration_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<ApplicationConfiguration | null>(ApplicationConfiguration.instance);
    }
    

    jinit_ApplicationConfiguration_0(): ApplicationConfiguration {
        super.jinit_JObject_0();
        this.jfields_ApplicationConfiguration();
        do {
            this.read(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    read(): void {
        this.setFullscreen(true); if (JThrowable.pending !== null) return;
        this.setProgressBarView(false); if (JThrowable.pending !== null) return;
        this.setShowTitleBar(false); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(jstr("Read Configuration: ") + jstr(this.toString()), this, "read"); if (JThrowable.pending !== null) return;
    }
    

    write(): void {
    }
    

    update(gameFeature: Feature | null): void {
        if (gameFeature == MainFeatureFactory.getInstance()!.FULL_SCREEN) {
            let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
            if (features!.isFeature(gameFeature)) {
                if (!this.isFullscreen()) {
                    this.setFullscreen(true); if (JThrowable.pending !== null) return;
                    this.write(); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } else {
                if (this.isFullscreen()) {
                    this.setFullscreen(false); if (JThrowable.pending !== null) return;
                    this.write(); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setFullscreen(fullscreen: bool): void {
        this.fullscreen = fullscreen;
    }
    

    isFullscreen(): bool {
        return this.fullscreen;
    }
    

    setShowTitleBar(showTitleBar: bool): void {
        this.showTitleBar = showTitleBar;
    }
    

    isShowTitleBar(): bool {
        return this.showTitleBar;
    }
    

    setProgressBarView(progressBarView: bool): void {
        this.progressBarView = progressBarView;
    }
    

    isProgressBarView(): bool {
        return this.progressBarView;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("isFullscreen: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendboolean(this.isFullscreen()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" isProgressBarView: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendboolean(this.isProgressBarView()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" isShowTitleBar: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendboolean(this.isShowTitleBar()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

