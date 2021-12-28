<template>
    <header class="p-12">
        <div class="grid grid-cols-12">
            <div class="col-span-6">
                <nuxt-link to="/" class="font-display text-lg">
            Joel Krause
                </nuxt-link>
            </div>
            <div class="col-span-6">
                <nav>
                    <ul class="flex justify-end">
                        <li class="mr-6">
                            <nuxt-link to="/" class="hover:to-blue-600">Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/posts" class="hover:to-blue-600">Posts</nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>