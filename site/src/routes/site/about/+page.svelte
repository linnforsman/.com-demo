<script>
  import { profile, skillset } from "$lib/data/lf";
  import Profile from "$lib/components/Profile.svelte";
  import ProfileLayout from "$lib/components/ProfileLayout.svelte";
  import ProfilePhoto from "$lib/components/ProfilePhoto.svelte";
</script>

<svelte:head>
  <title>Linn Forsman &mdash; About</title>
</svelte:head>

<Profile>
  <ProfileLayout>
    <div>
      <ProfilePhoto />
      <h1>Linn Forsman</h1>
      <small>Available by contract.</small>
    </div>
    <div>
      {#each profile as { intro }}
        <p>
          {intro}
        </p>
      {/each}
      <h1>Skill set</h1>
      {#each skillset as { category, skillset }}
        <ul>
          <li>{category}</li>
          {skillset}
        </ul>
      {/each}
    </div>
  </ProfileLayout>
</Profile>
