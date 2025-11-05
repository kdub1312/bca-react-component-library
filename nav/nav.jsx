export default function ReactBanner({ message }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">BCA</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
                    <li><a href="/">Start Page</a></li>
                    <li><a href="/bedtime-checklist" class="">Bedtime Checklist</a></li>
                    <li><a href="/auth/sign-up" class="">Sign Up</a></li>
                    <li><a href="/auth/sign-in" class="">Sign In</a></li>
                    
                    <li><a href="/auth/sign-out" class="">Sign Out</a></li>
                    <li><a href="/admin/add-checklist">Add Checklist</a></li>
                    <li><a href="/admin/all-checklists">All Checklists</a></li>
                    
                </ul>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  );
}