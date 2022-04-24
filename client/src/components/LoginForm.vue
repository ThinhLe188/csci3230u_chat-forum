<template>
    <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-5">
                            <div class="mb-md-1 mt-md-4 pb-4">
                                <h2 class="fw-bold mb-4 text-uppercase text-center">Login</h2>
                                <div class="form-outline form-white mb-4">
                                    <input type="email" class="form-control form-control-lg" placeholder="Email"/>
                                </div>
                                <div class="form-outline form-white mb-4">
                                    <input type="password" class="form-control form-control-lg" placeholder="Password"/>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-outline-light btn-lg px-5 mx-auto" type="submit">Login</button>
                                </div>
                            </div>
                            <div class="text-center">
                                <p class="mb-0">Don't have an account? <a href="/register" class="text-white-50 fw-bold">Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .gradient-custom {
        font-weight: bold;
        background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
    }

    ::placeholder {
        font-weight: bold;
    }

    button {
        font-weight: bold;
    }
</style>
