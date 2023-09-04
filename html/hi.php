<?php
$pageTitle = "hiGUI";
include '../include/header.php';
?>

<main>
    <section id="hi" class="hero">
        <h2>You have finally found a powerful library for your GUIs in OpenGL metauniverse.</h2>
        <p>hiGUI provides a lightweight GUI implementation into your C++ code.
        </br>This library requires third-party libraries as <a href="https://www.opengl.org/">Opengl</a> and <a href="https://www.glfw.org/">GLFW</a>.</p>
        <a href="doc.php" class="cta-button">Learn More</a>
    </section>

    <div class="carousel">
        <div class="carousel__item"><img src="image/gui-examples/screenshot-1.jpg"></div>
        <div class="carousel__item"><img src="image/gui-examples/screenshot-2.jpg"></div>
        <div class="carousel__item"><img src="image/gui-examples/screenshot-3.jpg"></div>
        <div class="carousel__item"><img src="image/gui-examples/screenshot-4.jpg"></div>
        <div class="carousel__item"><img src="image/gui-examples/screenshot-5.jpg"></div>
    </div>

    <script src="script/script.js"></script>
    <section id="doc" class="content">
        <h2>Documentation</h2>
        <p>Our documentation provides in-depth information about using hiGUI in your projects.</p>
    </section>
</main>

<?php
include '../include/footer.php';
?>
