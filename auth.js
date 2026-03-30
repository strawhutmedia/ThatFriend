/* Password Gate for That Friend website */
(function() {
    if (sessionStorage.getItem('tf_auth') === 'true') return;

    // Hide page content
    document.documentElement.style.visibility = 'hidden';

    window.addEventListener('DOMContentLoaded', function() {
        document.body.style.visibility = 'hidden';

        // Create overlay
        var overlay = document.createElement('div');
        overlay.id = 'authOverlay';
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#1a2a32;z-index:99999;display:flex;align-items:center;justify-content:center;visibility:visible;';

        overlay.innerHTML = '<div style="text-align:center;font-family:Montserrat,sans-serif;color:#f0e6d3;padding:2rem;">' +
            '<h1 style="font-family:Bebas Neue,sans-serif;font-size:3rem;letter-spacing:6px;margin-bottom:0.5rem;color:#fff;">THAT FRIEND</h1>' +
            '<p style="color:#8a9aa5;margin-bottom:2rem;font-size:0.9rem;">This site is password protected</p>' +
            '<form id="authForm" style="display:flex;flex-direction:column;gap:0.75rem;max-width:280px;margin:0 auto;">' +
            '<input type="text" id="authUser" placeholder="Username" autocomplete="username" style="padding:0.7rem 1rem;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#f0e6d3;border-radius:6px;font-family:Montserrat,sans-serif;font-size:0.9rem;outline:none;">' +
            '<input type="password" id="authPass" placeholder="Password" autocomplete="current-password" style="padding:0.7rem 1rem;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#f0e6d3;border-radius:6px;font-family:Montserrat,sans-serif;font-size:0.9rem;outline:none;">' +
            '<button type="submit" style="padding:0.7rem 1rem;background:#FF8C42;color:#fff;border:none;border-radius:6px;font-family:Montserrat,sans-serif;font-weight:700;font-size:0.9rem;cursor:pointer;letter-spacing:1px;text-transform:uppercase;">Enter</button>' +
            '<p id="authError" style="color:#e74c3c;font-size:0.8rem;display:none;margin:0;">Incorrect username or password</p>' +
            '</form></div>';

        document.body.appendChild(overlay);
        document.documentElement.style.visibility = 'visible';

        document.getElementById('authUser').focus();

        document.getElementById('authForm').addEventListener('submit', function(e) {
            e.preventDefault();
            var user = document.getElementById('authUser').value;
            var pass = document.getElementById('authPass').value;
            if (user === 'thatfriend' && pass === 'thatfriend') {
                sessionStorage.setItem('tf_auth', 'true');
                overlay.remove();
                document.body.style.visibility = 'visible';
            } else {
                document.getElementById('authError').style.display = 'block';
                document.getElementById('authPass').value = '';
            }
        });
    });
})();
