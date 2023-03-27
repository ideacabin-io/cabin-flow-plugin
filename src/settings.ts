import {App, PluginSettingTab, Setting} from "obsidian";
import {CabinFlowPlugin} from "./plugin";

export class CabinFlowSettingsTab extends PluginSettingTab {
	plugin: CabinFlowPlugin;

	constructor(app: App, plugin: CabinFlowPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Settings for the Cabin Flow plugin.'});

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					console.log('Secret: ' + value);
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
