<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top"> 
            <div class="container-fluid">
                <div class="collapse navbar-collapse row" id="navbarNav">
                    <div class="col-lg">
                        <section class="user_avatar d-flex justify-content-lg-end">
                            <a class="profile-pic text-center">
                                <p><slot></slot></p>
                            </a>
                        </section>
                    </div>
                    <!-- logout section -->
                    <div class="col-1 logout">
                        <div class="d-flex flex-col text-center">
                            <a href="/logout">
                                <i class="bi bi-box-arrow-right"></i>
                                <p>Logout</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
        
