### Reference

[https://www.keycloak.org/getting-started/getting-started-docker]

### start keycloak

`run docker compose`

`docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:24.0.3 start-dev`

### Log in to the Admin Console

1. Go to the Keycloak Admin Console.

2. Log in with the username and password you created earlier.

### Create a realm

A realm in Keycloak is equivalent to a tenant. Each realm allows an administrator to create isolated groups of applications and users. Initially, Keycloak includes a single realm, called master. Use this realm only for managing Keycloak and not for managing any applications.

1. Use these steps to create the first realm.

2. Open the Keycloak Admin Console.

3. Click the word master in the top-left corner, then click Create Realm.

4. Enter myrealm in the Realm name field.

5. Click Create.

### Create a user

Initially, the realm has no users. Use these steps to create a user:

1. Open the Keycloak Admin Console.

2. Click the word master in the top-left corner, then click myrealm.

3. Click Users in the left-hand menu.

4. Click Add user.

5. Fill in the form with the following values:

   - Username: myuser

   - First name: any first name

   - Last name: any last name

6. Click Create.

This user needs a password to log in. To set the initial password:

Click Credentials at the top of the page.

Fill in the Set password form with a password.

Toggle Temporary to Off so that the user does not need to update this password at the first login.
