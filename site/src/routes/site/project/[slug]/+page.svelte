<script>
  import LF from "$lib/assets/LF.jpg";
  import Button from "$lib/components/Button.svelte";
  import CustomButton from "$lib/components/CustomButton.svelte";
  import Project from "$lib/components/Project.svelte";
  import ProjectLayout from "$lib/components/ProjectLayout.svelte";
  export let code,
    preview = "No data";
  let title = "Predict Cutomer Churn Data with PySpark";
</script>

<svelte:head>
  <title>Linn Forsman &mdash; Portfolio</title>
</svelte:head>

<Project>
  <ProjectLayout>
    <div>
      <img src={LF} alt="" />
    </div>
    <div class="p">
      <h1 class="project-title">
        {title}
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
        necessitatibus molestiae dignissimos amet delectus quae? Repellat optio
        sit obcaecati atque vel magni et, excepturi similique quisquam eligendi
        neque, ipsa nostrum dolores ducimus accusantium adipisci quia, ex
        perspiciatis quibusdam dicta. Officiis unde aspernatur debitis ab, ipsum
        ipsa aperiam dignissimos quasi esse voluptas maiores rem quibusdam hic
        nesciunt. Consequatur ex officiis dolores illo. Esse nihil modi dolores,
        nisi, perspiciatis officiis ducimus ratione recusandae delectus nam
        rerum eveniet accusamus? Incidunt perferendis possimus totam, velit
        fugiat magnam ipsum sunt id, quam natus laborum cupiditate.
      </p>
      <div class="btn-group">
        <Button>
          <a href="/" alt=""> {code}</a></Button
        >
        <Button>
          <a href="/" alt=""> {preview}</a></Button
        >
        <CustomButton><a href="/" alt=""> {preview}</a></CustomButton>
      </div>
    </div>
  </ProjectLayout>
</Project>

<style lang="scss">
  .btn-group {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    margin-right: 2rem;
  }

  .p {
    padding-right: 2rem;
    padding-left: 2rem;
    .project-title {
      font-size: min(10vw, 4rem);
      text-transform: uppercase;
      padding: 0;
      margin: 0;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
</style>
