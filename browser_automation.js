// Clicks the update button on reports

document.querySelector('[data-automationid="settings-panel-update-button"]').click();
completion('Update clicked');

// Clicks the "export" button on reports

document.querySelector('[data-automationid="report-toolbar-export-button"]').click();
completion('Export clicked');

// Clicks the PDF button in the export overlfow menu

document.querySelector('[data-automationid="report-toolbar-export-pdf-menuitem--body"]').click();
completion('PDF clicked');
