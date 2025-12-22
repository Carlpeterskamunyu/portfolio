Contact form MySQL setup

1) Create the database and table

   - Open phpMyAdmin (http://localhost/phpmyadmin) or use MySQL CLI and import `db.sql`.

2) Configure database credentials

   - Edit `save_contact.php` and update `$db_host`, `$db_user`, `$db_pass`, and `$db_name` to match your XAMPP MySQL settings.

   Typical XAMPP defaults:
   - Host: `127.0.0.1` or `localhost`
   - User: `root`
   - Password: `` (empty)

3) Test the form

   - Start Apache and MySQL in XAMPP.
   - Open `http://localhost/myportfolio/` in your browser.
   - Fill the contact form and submit. If successful, the data will be stored in `myportfolio_db.contacts`.

Security notes

- For production, do not use the root DB user. Create a dedicated MySQL user with limited privileges.
- Consider adding server-side sanitization and rate-limiting if the site will be public.
