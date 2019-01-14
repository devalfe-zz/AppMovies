<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ mix('css/main.css') }}">
    <link rel="stylesheet" href="{{ mix('css/themes/' . config('blog.color_theme') . '.css') }}">
    @yield('styles')

    <title>@yield('title', config('app.name'))</title>
    <script>
        window.Language = '{{ config('app.locale') }}';
        windows.laravel = @php echo json_encode(['csrfToken' => csrf_token(),]);
        @endphp
    </script>
</head>
<body>
    <div id="app">

    </div>
    <!-- Scripts -->
    <script src="{{ mix('js/main.js') }}"></script>

    @yield('scripts')

    <script>
        $(function () {
            $("[data-toggle='tooltip']").tooltip();
        });
    </script>

</body>
</html>