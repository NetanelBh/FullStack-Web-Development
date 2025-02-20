// Conditions that require to check the view permission
const CONDITIONAL_SUBSCRIPTION_PERMISSIONS = ["Create Subscriptions", "Delete Subscriptions", "Update Subscription"];

// Conditions that require to check the view permission
const CONDITIONAL_MOVIE_PERMISSIONS = ["Create Movies", "Delete Movies", "Update Movie"];

const updatedPermissionsCheckboxes = (clickedOption, current_employee_permissions) => {
    let updatedPermissions = [...current_employee_permissions];
    if (!clickedOption.isChecked) {
        updatedPermissions = updatedPermissions.filter((perm) => clickedOption.permission !== perm);
    } else {
        // Insert the clicked permission to the employee permissions list
        updatedPermissions.push(clickedOption.permission);

        // Check if one of the conditional permissions is checked to check the view permission automatically
        if (CONDITIONAL_SUBSCRIPTION_PERMISSIONS.includes(clickedOption.permission)) {
            const viewPerm = "View Subscription";
            if (!current_employee_permissions.includes(viewPerm)) {
                updatedPermissions.push(viewPerm);
            }
        } else if (CONDITIONAL_MOVIE_PERMISSIONS.includes(clickedOption.permission)) {
            const viewPerm = "View Movies";
            if (!current_employee_permissions.includes(viewPerm)) {
                updatedPermissions.push(viewPerm);
            }
        }
    }

    return updatedPermissions;
};

export default updatedPermissionsCheckboxes;