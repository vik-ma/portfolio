// Information for every project on website
// name: Name of project
// shortDescription: Description of project that appears on Home page
// fullDescription: Description of project that appears on the project's page
// techStack: Technologies used in the project
// thumbnailImgSrc: Image source of the project thumbnail image that appears on Home page
// thumbnailBase64Data: Base64 Data of placeholder image for thumbnail image
// previewImgSrcList: List of Image sources for every project preview image that appears on the project's page
// previewImgMainWidth: Widths of the main preview image on the project's page
// previewImgMenuHeightList: Height of the main preview image on the project's page
// previewImgBase64DataList: List of Base64 Data of placeholder images for every preview image in project
// previewImgMenuWidthList: List of widths for every preview image thumbnail that appears below the main image on the project's page
// previewImgMenuHeightList: List of heights for every preview image thumbnail that appears below the main image on the project's page
// fullSizeImgMaxWidth: Widths of enlarged preview images that appears when clicking on the main preview image on the project's page
// githubLink: Link to the project's GitHub Repository
// liveSiteLink: Link to the live website of the project, if it exists
export const ProjectsInfo = {
  "price-performance-scraper": {
    name: "Price-Performance Scraper",
    shortDescription:
      "Website that allows the user to calculate the Price-Performance Scores of selected GPU and CPU models by scraping their online prices in real time and comparing them to up-to-date benchmarks.",
    fullDescription: (
      <p>
        <strong className="text-stone-100">Price-Performance Scraper</strong> is
        a full-stack web application{" "}
        <strong className="text-stone-100">
          designed to help users find out which GPU and CPU products currently
          listed on the market have the best Price-Performance Score
        </strong>{" "}
        by scraping online prices in real time and comparing them to up-to-date
        performance benchmarks.
        <br />
        <br />
        Price scraping is done with Python on the back end, which runs on a
        Django server with a REST API set up to communicate with the front end
        website. A PostgreSQL database stores the collected price scrape data,
        as well as{" "}
        <strong className="text-stone-100">
          benchmark data that gets automatically scraped and updated every day.
        </strong>
        <br />
        <br />
        The website is made using React, TypeScript and Next.js 13.{" "}
        <strong className="text-stone-100">
          On the website, the user can select products to perform a
          Price-Performance Scrape on.
        </strong>{" "}
        Once the scrape has finished, every product listing found will be
        displayed in a table, ranked by their{" "}
        <strong className="text-stone-100">Price-Performance Score</strong>.
        <br />
        <br />
        Next.js&apos;{" "}
        <strong className="text-stone-100">Static Site Generation</strong> makes
        loading past Price-Performance Scrapes{" "}
        <strong className="text-orange-500">blazingly fast!</strong>
      </p>
    ),
    techStack: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Docker",
    ],
    thumbnailImgSrc: "/images/pps-thumbnail.png",
    thumbnailBase64Data:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EAB4QAAICAQUBAAAAAAAAAAAAAAIEAQMRBQYHEhMh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwX/xAAhEQABBAEDBQAAAAAAAAAAAAABAgQRITEAElEDBRMiQf/aAAwDAQACEQMRAD8AOQLdk8wutO8ibc1Ft9dHXbKGF9a8q64oRCxUIr8pjAXdjP7mwSgcjjtMxw5eSFhSbKJ9R9JBxAsYqs3pW3a0Mel4t0gbuRYubJ5xr//Z",
    previewImgSrcList: [
      "/images/pps-preview-1.png",
      "/images/pps-preview-2.png",
      "/images/pps-preview-3.png",
      "/images/pps-preview-4.png",
      "/images/pps-preview-5.png",
      "/images/pps-preview-gif.gif",
    ],
    previewImgMainWidth: 392,
    previewImgMainHeight: 325,
    previewImgBase64DataList: [
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACP/EAB0QAAIDAAIDAAAAAAAAAAAAAAIEAQMFBhEHFiH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAIBEAAgECBwEAAAAAAAAAAAAAAQIRBAUAAwYSITFBcf/aAAwDAQACEQMRAD8AAnmPg2Tm26vtdzOk8gGyqm2kzYkAEvno3rnNQEQlAlfZ2M/T7iJLqIiCKe6VtyVM9midsiAeJYEedwPmGl0tT2qlKq8gHMHUcoFae/d0R5GP/9k=",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EAB0QAAIBBAMAAAAAAAAAAAAAAAIDAQAEBSEGEkH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGhEAAwEBAQEAAAAAAAAAAAAAAQIDEQASwf/aAAwDAQACEQMRAD8AKfkmSv8AI5h7L29ayRb0CSPYjC9RryiL0uodzpz7wSE4L4QYO//Z",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EACEQAAIABAcBAAAAAAAAAAAAAAIDAQQFEQAGBxIhMUFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAdEQABBAIDAAAAAAAAAAAAAAABAgMEEQCxBTGB/9oADAMBAAIRAxEAPwAxNQqdKrzFUJfe8wWlRDBsyZWiS1kXtuyjx8xbybLcaaptAoCte40ttDMlSEdCtA5//9k=",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EAB4QAAIBAwUAAAAAAAAAAAAAAAEDAgAREgQFBlFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwAnuc7o58FT1Ec24glpNibk9eVGZQA5f//Z",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EAB0QAAIBBAMAAAAAAAAAAAAAAAECAwQFESEABoH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEBAQEBAQAAAAAAAAAAAAAAAREAAhL/2gAMAwEAAhEDEQA/ACEufcpLtXNWS0JVyMKBOWVNY0GB17xLz6YTEIS7/9k=",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EAB4QAAIBBAMBAAAAAAAAAAAAAAEEAgMFBhIHERQT/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAfEQEAAQQBBQAAAAAAAAAAAAABAgQRITEDAAVBUfD/2gAMAwEAAhEDEQA/ADtvnHmMZxjVyzpz1KNKW++zXoI+eFHtBJOtR2j8SZbTYqbnsEgR61IJMXN3Oo5KiIxgXYGI22yHTvB9pUdEw4EnNUJN8+Le1xnr/9k=",
    ],
    previewImgMenuWidthList: [59, 59, 59, 59, 59, 59],
    previewImgMenuHeightList: [48, 48, 48, 48, 48, 48],
    fullSizeImgMaxWidth: 848,
    githubLink: "https://github.com/vik-ma/Price-Performance-Scraper/",
    liveSiteLink: "https://price-performance-scraper.vercel.app/",
  },
  "pathfinding-race": {
    name: "Pathfinding Race",
    shortDescription:
      "Browser game about pathfinding algorithms! The objective of the game is to correctly predict which pathfinding algorithm will reach the goal first. The game is meant to provide a fun and intuitive way to learn about pathfinding algorithms!",
    fullDescription: (
      <p>
        <strong className="text-stone-100">Pathfinding Race</strong> is a
        browser game made in JavaScript and React about{" "}
        <strong className="text-stone-100">Pathfinding Algorithms</strong>.
        <br />
        <br />
        In the game, a randomized grid is generated every round. On this grid,
        different pathfinding algorithms will race against each other towards a
        common Goal Node.{" "}
        <strong className="text-stone-100">
          The objective of the game is to correctly predict which pathfinding
          algorithm will reach the Goal Node first!
        </strong>
        <br />
        <br />
        The game was designed to provide a fun and easy way to learn about
        pathfinding algorithms! After the player makes their prediction, the
        game will visualize the paths of the algorithms until the first one
        finds the goal.
        <br />
        <br />
        <strong className="text-stone-100">
          Six different types of pathfinding algorithms have been implemented in
          this game
        </strong>
        , and the Information tab on the website contains detailed explanations
        of every algorithm.
      </p>
    ),
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    thumbnailImgSrc: "/images/pathfinding-race-thumbnail.png",
    thumbnailBase64Data:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAB//EACAQAAICAQMFAAAAAAAAAAAAAAECAwQGBQcRABIhI0H/xAAVAQEBAAAAAAAAAAAAAAAAAAACBv/EACARAAIBAwUBAQAAAAAAAAAAAAECEQMEEgAFITEyBkH/2gAMAwEAAhEDEQA/AE3cDPsj2pzLTcX0d61mtZkpKstmv7oo5ZUR1DKQCe1/DEcgj7z0vldjsN2pM7AqAKxgR6p5EHryY5WJ5nLVbttlaXFKqkFWDMRiQFAFJXjEgmciecuj1+6//9k=",
    previewImgSrcList: [
      "/images/pathfinding-race-preview-1.png",
      "/images/pathfinding-race-preview-2.png",
      "/images/pathfinding-race-preview-3.png",
      "/images/pathfinding-race-preview-4.png",
      "/images/pathfinding-race-preview-gif.gif",
    ],
    previewImgMainWidth: 300,
    previewImgMainHeight: 299,
    previewImgBase64DataList: [
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAKAAoDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAIH/8QAJBAAAgIBAwMFAQAAAAAAAAAAAQMCBBEABSEGEkETFCIxUZH/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/EACERAAECBQUBAAAAAAAAAAAAAAECAwAEITFBERMUUbEi/9oADAMBAAIRAxEAPwDe+jaqKHSVTbK9bbrtoe1XJjaoK4icT3AzhEjOYntzxwRIxJGgXUBxxRwYpZl1RmVmumppfJ77iblBbrbXR3FBE2SIMVKwcnxjj+aDfWxvq+MnJ7h2WU7xkfeB5B+mWMO67ukskYM2hRnEniXzH2POk3FK27wVMNoLy6C59h1yhRFtoFJQAZLA9MfupOZcc5C6m59imlUI4yKCw8j/2Q==",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAKAAoDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQGB//EACUQAAICAQMDBAMAAAAAAAAAAAECAwQFAAYREiEiBxQxUSQzQ//EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAJREAAgIBAwMEAwAAAAAAAAAAAQIDEQQAEiExQbEFBhMUI1GR/9oADAMBAAIRAxEAPwDTd0ZjM+l+3KdnGbRpZ6A4pp4naBo2idE7JKVQqwZkcD4J8SOQdC+3IfSfcOdkxLKY1hkKzFgRtBCndHvIEgBNMENLXSzWqlVwx6kYJndGmdRGArOpZmYPuYt+OgFIBFGyBVaqKDUM1RhzMtgxtbiWZkjgjKqWHVwPH476BzWxkzJFjXcoY0bIsWaNHkWOx6acAlxx8ReyvF/uuO1j+E6NuexYgxkLQTuhfGxdZRiOrhq4HP3wNIlm29dEzRx/O3A6nydOX7973035sv7W/ofs6k8l3+y/J6nzqkxkQYycdh41/9k=",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAKAAoDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQQGCP/EACMQAAICAgIBBAMAAAAAAAAAAAECAwQFBwYRAAgSISIUQWH/xAAWAQEBAQAAAAAAAAAAAAAAAAAFAwT/xAAeEQACAQQDAQAAAAAAAAAAAAABAgADEiFBERNxMv/aAAwDAQACEQMRAD8AofTt6aNU5vUXD8xkdG4XIm7x2hLYvW8X7zM7RqXZvr9iT32fBq9UkkY3HCtzEkbmL9v41MRtrlGJxNP8erV5FdhrV4a4VIo1ndVVR+gAAAP55IlOciWW60Zgo7Y2niVqYrFbL5BWqwuixVq+ZnSNFCdABQ/QA8uwHI8mV/s+xG9duXrs127blmmmlZ5ppZCzOxPZYk/JJPySfC6rN2NnZidJV6lxoT//2Q==",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAKAAoDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwIE/8QAJhAAAgECBQIHAAAAAAAAAAAAAQIDAAQFBgcSIQgxERMyM0JRYf/EABYBAQEBAAAAAAAAAAAAAAAAAAUEA//EAB0RAAICAgMBAAAAAAAAAAAAAAECAAMhQRESE3H/2gAMAwEAAhEDEQA/ABPR3R/pyzDpjY4tnTqDssHxuZnSTBbm2hDRqCwTllBbcApH3u79qNsySeOYs/VnJJ3CWWG4MrGWFwxY7gtuPAGpLGQOcblVXfzXOhNcYEslo8o3HzE5bk+g1uWYEcHUnsVe5xsyLuaY3UhMre4fl+0bYT6H7EK1HmMan//Z",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAKAAoDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQQFB//EACgQAAEDAwEGBwAAAAAAAAAAAAECAwQABSESBgcREyJhMUFCUVNxsf/EABcBAQEBAQAAAAAAAAAAAAAAAAUGAwT/xAAmEQABAgUCBgMAAAAAAAAAAAABAgMABBEhQSJhExQxQlFxseHw/9oADAMBAAIRAxEAPwDa93T9vj2GDa5mzsaW67EVyUrt6W1urSE9A1A6jpPtkgqA05oN9AW8q9QdrfviKeYedVMruaEm1Scmt819QzLh296W66zMbbQpxRQ25Z1NqSCcAp9J7eXhQ7xlg8oBGTn6hyWXMcsjXgefHuBsXOmt2ixpbmOpAJcADhHBfKR1feTnvXW8tYFjGa2WeYXpHdgRLuWbjI4/Ov8ATUy+67x1aj1Od4bl2WuAjSOgxtH/2Q==",
    ],
    previewImgMenuWidthList: [50, 50, 50, 50, 50],
    previewImgMenuHeightList: [50, 50, 50, 50, 50],
    fullSizeImgMaxWidth: 750,
    githubLink: "https://github.com/vik-ma/pathfinding-race/",
    liveSiteLink: "https://vik-ma.github.io/pathfinding-race/",
  },
  "paint-a-wave-function-collapse": {
    name: "Paint A Wave Function Collapse",
    shortDescription:
      "Browser application that will procedurally generate pixel art using the Wave Function Collapse Algorithm from small base samples painted by the user.",
    fullDescription: (
      <p>
        <strong className="text-stone-100">
          Paint A Wave Function Collapse
        </strong>{" "}
        is a Python application developed in the PyGame engine that is{" "}
        <strong className="text-stone-100">
          able to run inside of a web browser with the use of WebAssembly.
        </strong>
        <br />
        <br />
        The{" "}
        <strong className="text-stone-100">
          Wave Function Collapse Algorithm
        </strong>{" "}
        is an algorithm that can procedurally generate new images from on the
        patterns of a smaller base tile sample. This application allows the user
        to{" "}
        <strong className="text-stone-100">
          paint their own base tile samples and then watch the Wave Function
          Collapse Algorithm procedurally generate an image from the sample.
        </strong>
        <br />
        <br />
        Since the application is{" "}
        <strong className="text-stone-100">multi-threaded</strong>, the image
        will get gradually updated as the algorithm is executing, and the UI
        remains responsive during this period.
        <br />
        <br />
        <strong className="text-amber-500">
          NOTE: This application runs significantly slower in the browser
          compared to on the desktop because the technology to host PyGame
          applications using WebAssembly is still very new and unoptimized.
        </strong>
      </p>
    ),
    techStack: ["Python", "PyGame", "HTML", "CSS", "JavaScript", "WebAssembly"],
    thumbnailImgSrc: "/images/wfc-thumbnail.png",
    thumbnailBase64Data:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAB//EAB0QAAICAgMBAAAAAAAAAAAAAAECBAUDEQYHEgj/xAAUAQEAAAAAAAAAAAAAAAAAAAAG/8QAIBEAAgEDBAMAAAAAAAAAAAAAAQIRAwQSBSExUQAGQf/aAAwDAQACEQMRAD8Ae+wupOJfOcXjsCMZV5PkU8a1ubadkTHknWG8pEjyieE8qqoo0SAuyWOyT1Ku9TS6V9dAVHByWQBhkQsKQJ45JmT1tCTXb631v2U1bagturNgqqWYKpPbGWJIlpgE/ANvP//Z",
    previewImgSrcList: [
      "/images/wfc-preview-1.png",
      "/images/wfc-preview-2.png",
      "/images/wfc-preview-gif.gif",
    ],
    previewImgMainWidth: 390,
    previewImgMainHeight: 317,
    previewImgBase64DataList: [
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAIAAoDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAf/xAAhEAADAAEEAQUAAAAAAAAAAAABAgMFAAQRMSEGEiJScf/EABYBAQEBAAAAAAAAAAAAAAAAAAYBAv/EACYRAQACAAMGBwAAAAAAAAAAAAECEQADIQQFEhMxQQYiMmGh4fD/2gAMAwEAAhEDEQA/AKvhsjtbrO1fTeKq8ZIKbfIbYKrfHp0KKeevP4TotuPcUvD+7ZbLknGMpT82ZKSyUfVI0LNCqA6NuLkR5UQk99aV6trbep2AqgNOuBWlhWs7U4gxYloThErM/UH3+QOudLGML0l8feNz5PG8Np+9sf/Z",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAIAAoDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAQf/xAAfEAADAQABBQEBAAAAAAAAAAABAgMEBQAGBxEhEhT/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/EACARAQABBAMAAwEAAAAAAAAAAAECBBESIQADBQYUQYH/2gAMAwEAAhEDEQA/ALHDxR4+8eds8PlfRp5zmdOaV+7d+85sv9W5G/cjOUncKk5hFVnAZiPbEnoqFNVd3STrSPZOEsoABjbQE7Cr+rreixyh+Ser5/r+w1NBT/X6jUY5Skg6kyV2y2pbH8A4au6sddVK2q03ahLzVZkKff0Ain310pjHgcpuTZv/AAOf/9k=",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAADAAkDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQj/xAAjEAABAgUDBQAAAAAAAAAAAAACAQMABAUREggTYRRCUZLR/8QAFgEBAQEAAAAAAAAAAAAAAAAABgcI/8QAIxEAAQEIAQUAAAAAAAAAAAAAAREAAgMEBhIxYfAhIjJCkf/aAAwDAQACEQMRAD8AR1cUWnhp+r1TAXUdEJdoUSZcwQeqa7Msb82vzA+poMOHSkR13ADoHU4DwTmWKV9MRBRszLBLOw+IVQ8PZLk0qaaL9kPJ+6/YjNo4S2b7Bv6W/9k=",
    ],
    previewImgMenuWidthList: [59, 59, 70],
    previewImgMenuHeightList: [48, 48, 48],
    fullSizeImgMaxWidth: 820,
    githubLink: "https://github.com/vik-ma/paint-a-wave-function-collapse/",
    liveSiteLink: "https://vik-ma.github.io/paint-a-wave-function-collapse/",
  },
  "screenshot-ocr": {
    name: "Screenshot OCR",
    shortDescription:
      "Desktop application that lets the user extract text from images by just marking a section of the screen, instead of having to load an image file. Serves as a front-end for the Tesseract OCR Engine.",
    fullDescription: (
      <p>
        <strong className="text-stone-100">Screenshot OCR</strong> is a desktop
        application made for Windows that serves as a front end for
        Google&apos;s{" "}
        <strong className="text-stone-100">Tesseract OCR engine</strong>.
        <br />
        <br />
        The main feature of the application is the ability to{" "}
        <strong className="text-stone-100">
          mark a section of the screen, in the same way as with Windows&apos;
          Snipping Tool, and automatically perform OCR on the text within that
          section
        </strong>
        , without having to crop, save and then load an actual image file.
        <br />
        <br />
        The user can also save a combination of different language parameters to
        be re-used later.
      </p>
    ),
    techStack: ["Python", "PyQt"],
    thumbnailImgSrc: "/images/screenshot-ocr-thumbnail.png",
    thumbnailBase64Data:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EAB8QAAEDBQADAAAAAAAAAAAAAAECAxEEBQYHEgAhMf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGREAAwEBAQAAAAAAAAAAAAAAAQIRABIx/9oADAMBAAIRAxEAPwBfcM1nqK6YWimv+rLLUJXTudpZt7LfQkg++CqSRMhQEn55bPMYszdMaTv/2Q==",
    previewImgSrcList: [
      "/images/screenshot-ocr-preview.png",
      "/images/screenshot-ocr-preview-gif.gif",
    ],
    previewImgMainWidth: 406,
    previewImgMainHeight: 245,
    previewImgBase64DataList: [
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EACAQAAECBQUAAAAAAAAAAAAAAAEDEQIEBQYHABMxQWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAERJR/9oADAMBAAIRAxEAPwBdbVxphmespJCv4hoc0CgYoglT0EgWUHe2YncPy3mm+RYszaY2Z//Z",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EACAQAAECBQUAAAAAAAAAAAAAAAEDEQIEBQYHABMxQWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAERJR/9oADAMBAAIRAxEAPwBdbVxphmespJCv4hoc0CgYoglT0EgWUHe2YncPy3mm+RYszaY2Z//Z",
    ],
    previewImgMenuWidthList: [85, 85],
    previewImgMenuHeightList: [50, 50],
    fullSizeImgMaxWidth: 832,
    githubLink: "https://github.com/vik-ma/screenshot-OCR/",
    liveSiteLink: "",
  },
  "file-opener": {
    name: "File Opener",
    shortDescription:
      "Desktop application that automates the opening of multiple programs, files or folders. User can save groups of items to be opened simultaneously.",
    fullDescription: (
      <p>
        <strong className="text-stone-100">File Opener</strong>, or{" "}
        <strong className="text-stone-100">Open File Groups</strong>, is a
        desktop application made for Windows that allows the user to{" "}
        <strong className="text-stone-100">
          save a list of programs, files and folders to be simultaneously opened
          with one click.
        </strong>
        <br />
        <br />
        The user can create multiple groups and modify them at any time. The
        groups and the settings of the application are saved to a .json file.
        <br />
        <br />
        If the user is using{" "}
        <strong className="text-stone-100">VLC Media Player</strong> to open
        audio or video files, the application is also able to change the
        user&apos;s VLC settings to accommodate multiple media files being
        opened simultaneously.
      </p>
    ),
    techStack: ["Python", "Tkinter"],
    thumbnailImgSrc: "/images/file-opener-thumbnail.png",
    thumbnailBase64Data:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EACAQAAIBAwQDAAAAAAAAAAAAAAECAwQFEQYHITEAEhT/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAHxEAAQMDBQAAAAAAAAAAAAAAAQIDEQASIQQxQVGx/9oADAMBAAIRAxEAPwBWbZpHaC62yspW2L0gtNPB8klK9jhkRUbOSodTySAct7c9Y68bWpeDgeSbVDYjER1FFbDVhbIlJ4Ofa//Z",
    previewImgSrcList: ["/images/file-opener-preview.png"],
    previewImgMainWidth: 407,
    previewImgMainHeight: 256,
    previewImgBase64DataList: [
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EACAQAAIBAwQDAAAAAAAAAAAAAAECBAMFEQAGByESFDH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAIBEAAQIFBQAAAAAAAAAAAAAAAQIDAAQREiETMUGRsf/aAAwDAQACEQMRAD8AVOLtLhm5WebFfgLZwjSI/rVIz2KhURUbJJUOh7JGct5d/MabUy8HA6k2qGxGKdQVsNWaZFUng59j/9k=",
    ],
    previewImgMenuWidthList: [81],
    previewImgMenuHeightList: [50],
    fullSizeImgMaxWidth: 702,
    githubLink: "https://github.com/vik-ma/open-file-groups/",
    liveSiteLink: "",
  },
  "link-opener": {
    name: "Link Opener",
    shortDescription:
      "Desktop application that automates the opening of multiple links. User can load URLs from a text file, filter and open them in any installed browser.",
    fullDescription: (
      <p>
        <strong className="text-stone-100">Link Opener</strong>, or{" "}
        <strong className="text-stone-100">Open Links From Text File</strong>,
        is a desktop application made for Windows that allows the user to{" "}
        <strong className="text-stone-100">
          automatically open a list of URLs stored in a text file into any
          installed web browser.
        </strong>
        <br />
        <br />
        The application also includes the{" "}
        <strong className="text-stone-100">
          ability to filter which links to open.
        </strong>{" "}
        Inside the text file, the user can write comments next to the URLs and
        then apply a filter in the application to only open the links whose
        comment contains a specific phrase. Filtering can also be performed on
        the URLs themselves.
      </p>
    ),
    techStack: ["Python", "Tkinter"],
    thumbnailImgSrc: "/images/link-opener-thumbnail.png",
    previewImgMainWidth: 402,
    previewImgMainHeight: 227,
    thumbnailBase64Data:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EACIQAAECAwkAAAAAAAAAAAAAAAECAwUGCAAEBxMWITEyUf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAIBEAAAQGAwAAAAAAAAAAAAAAAAEEEgIDERNBURQxsf/aAAwDAQACEQMRAD8AVSHU60+PQ1Mms4FSa20+kOZumLoopHcp3b4JHtkVzZi+I4lBuM+65oJ+KmsWWkzWN+j/2Q==",
    previewImgSrcList: ["/images/link-opener-preview.png"],
    previewImgBase64DataList: [
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EACEQAAECBgIDAAAAAAAAAAAAAAEEEQIDBggSEwAFFhhB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAfEQACAQIHAAAAAAAAAAAAAAABAgQAMQMREyJBUWH/2gAMAwEAAhEDEQA/AFNTW826x9P496/UXoSyyqOVMJCZgEOWsnW7OT9filsZ7FpG4m+flqnMSK2DpMgK9cV//9k=",
    ],
    previewImgMenuWidthList: [90],
    previewImgMenuHeightList: [50],
    fullSizeImgMaxWidth: 602,
    githubLink: "https://github.com/vik-ma/open-links-from-txt-file/",
    liveSiteLink: "",
  },
};
