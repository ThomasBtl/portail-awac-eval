<script>
    import { page } from '$app/stores';
</script>

<h1>Oups ! Une erreur est survenue !</h1>
<h3>Impossible de récupérer les données nécessaire pour le portail</h3>
<h3>{$page.status} : {$page.error?.message}</h3>