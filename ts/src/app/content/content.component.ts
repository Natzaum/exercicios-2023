import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const showMoreButton = document.querySelector(".btn-show-more");
    const resumeElement = document.querySelector(".resume") as HTMLElement;
    const createTopicButton = document.querySelector('.createTopic') as HTMLElement;
    const createTopic2Button = document.querySelector('.createTopic2') as HTMLElement;
    const sendMessageButton = document.querySelector('.sendMessage') as HTMLElement;
    const discussionsPage = document.querySelector('.discutionsPage') as HTMLElement;
    const newTopicElement = document.querySelector('.newTopic') as HTMLElement;
    const topicSentElement = document.querySelector('.topicSent') as HTMLElement;
    const commentsGet1Button = document.querySelector('.comments-get-1') as HTMLElement;
    const conteudoField = document.querySelector('.conteudo-field') as HTMLElement;
    const commentsGetButton = document.querySelector('.comments-get') as HTMLElement;
    const commentsContainer1 = document.querySelector('.comments-container-1') as HTMLElement;
    const commentsContainer = document.querySelector('.comments-container') as HTMLElement;

    if (showMoreButton) {
      showMoreButton.addEventListener("click", () => {
        if (resumeElement) {
          resumeElement.innerHTML = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.
          <br>
          <br>
          Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.
          <br>
          <br>
          Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.
          <br>
          <br>
          Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. `;
        }
      });
    }

    createTopicButton.addEventListener('click', () => {
      discussionsPage.style.display = 'none';
      newTopicElement.style.marginBottom = '50px';
      newTopicElement.style.display = 'block';
      topicSentElement.style.display = 'none';
    });

    createTopic2Button.addEventListener('click', () => {
      newTopicElement.style.display = 'block';
      topicSentElement.style.display = 'none';
    });

    sendMessageButton.addEventListener('click', () => {
      topicSentElement.style.display = 'block';
      newTopicElement.style.display = 'none';
    });

    commentsGet1Button.addEventListener('click', () => {
      toggleVisibility(commentsContainer1);
    });

    commentsGetButton.addEventListener('click', () => {
      toggleVisibility(commentsContainer);
    });

    function toggleVisibility(element: HTMLElement) {
      element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    }
  }
}
