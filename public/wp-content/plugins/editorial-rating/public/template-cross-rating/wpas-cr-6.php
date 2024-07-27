<?php
/**
 * Cross Rating Template: 6
 */
  wp_enqueue_style( $this->plugin_name . '-icomoon' );
?>

<style>
  .cr6-wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 15px;
    font-family: system-ui;
  }

  .cr6-ranked {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 40px;
  }
  .cr6-ranked .cr6-card:nth-child(2) {
    order: 1;
    margin-top: 60px;
  }
  .cr6-ranked .cr6-card:nth-child(2) .cr6-card-content {
    background-color: #331181;
  }
  .cr6-ranked .cr6-card:nth-child(3) {
    order: 3;
    margin-top: 60px;
  }
  .cr6-ranked .cr6-card:nth-child(3) .cr6-card-content {
    background-color: #331181;
  }
  .cr6-ranked .cr6-card:first-child {
    order: 2;
    margin-top: 60px;
    transform: scale(1.09);
    z-index: 9;
  }
  .cr6-ranked .cr6-card:first-child .cr6-ranking span {
    background-color: #FE9720;
  }
  .cr6-ranked .cr6-card .cr6-ranking {
    position: relative;
  }
  .cr6-ranked .cr6-card .cr6-ranking sub {
    bottom: -5px;
    font-size: 12px;
  }

  .cr6-ranked .cr6-card .cr6-ranking span {
    width: 110px;
    height: 110px;
    font-size: 24px;
    line-height: 24px;
    margin: 0 auto;
    clip-path: polygon(50% 0%, 66% 33%, 100% 35%, 74% 60%, 80% 90%, 51% 70%, 22% 90%, 30% 60%, 5% 35%, 36% 35%);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5234EE;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: -3%;
    position: relative;
  }
  .cr6-ranked .cr6-card .cr6-ranking::before {
    content: "";
    width: 100%;
    height: 50%;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    top: 0;
  }
  .cr6-ranked .cr6-card .cr6-card-content {
    background-color: #4e21b3;
    padding: 50px 20px 20px;
    border-radius: 5px;
    margin-top: -50px;
  }
  .cr6-ranked .cr6-card .cr6-card-content h3 {
    margin: 0;
    text-align: center;
  }
  .cr6-ranked .cr6-card .cr6-card-content h3 a {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 15px;
    color: #ffffff;
    font-size: 20px;
    line-height: 28px;
  }
  .cr6-ranked .cr6-card .cr6-card-content .cr6-heading {
    font-size: 18px;
    line-height: 18px;
    color: #ffffff;
    margin: 0 0 10px;
  }
  .cr6-ranked .cr6-card .cr6-card-content .cr6-pros-cons-list,
  .cr6-ranked .cr6-card .cr6-card-content .cr6-features-list {
    margin: 0 0 20px;
    padding: 0;
    list-style: none;
  }
  .cr6-ranked .cr6-card .cr6-card-content .cr6-pros-cons-list:last-child,
  .cr6-ranked .cr6-card .cr6-card-content .cr6-features-list:last-child {
    margin-bottom: 0px;
  }
  .cr6-ranked .cr6-card .cr6-card-content .cr6-features-list li {
    padding: 5px 0;
    color: #ffffff;
    border-bottom: 1px solid #ffffff4f;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
  .cr6-ranked .cr6-card .cr6-card-content .cr6-features-list li:last-child {
    border: none;
    padding-bottom: 0;
  }
  .cr6-ranked .cr6-card .cr6-card-content .cr6-pros-cons-list li {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    position: relative;
    padding-left: 30px;
    margin-top: 5px;
  }
  .cr6-ranked .cr6-card .cr6-card-content .cr6-pros-cons-list li::before {
    content: "";
    width: 13px;
    height: 13px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%23ffffff'%3E%3Cpath d='M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    position: absolute;
    left: 5px;
    top: 6px;
  }
  .cr6-ranked .cr6-card .cr6-card-content .cr6-pros-cons-list li.pros::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%2319ff2d'%3E%3Cpath d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z'/%3E%3C/svg%3E");
  }
  .cr6-ranked .cr6-card .cr6-card-content .cr6-pros-cons-list li.cons::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%23ff0000'%3E%3Cpath d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z'/%3E%3C/svg%3E");
  }
  .cr6-ranked .cr6-card .cr6-card-content .cr6-pros-cons-list:last-child {
    margin-bottom: 0;
  }

  .cr6-ranked .cr6-card .cr6-description p {
      color: #ffffff;
      margin-bottom: 0;
      font-size: 14px;
  }

  .cr6-card2 {
    background-color: #eee;
    margin-top: 20px;
    border-radius: 10px;
    padding: 20px 20px 20px 90px;
    position: relative;
    min-height: 90px;
  }
  .cr6-card2 .cr6-ranking {
    width: 50px;
    height: 50px;
    background-color: #646363;
    font-size: 32px;
    font-weight: 700;
    color: #ffffff;
    position: absolute;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border-radius: 50%;
  }
  .cr6-card2 .cr6-title {
    margin: 0;
  }
  .cr6-card2 .cr6-title a {
    color: #000000;
    text-decoration: none;
    line-height: 24px;
    font-size: 22px;
    font-weight: 700;
  }
  .cr6-card2 .cr6-heading {
    margin: 10px 0 5px;
    font-size: 18px;
    font-weight: 600;
  }
  .cr6-card2 .cr6-features-list {
    margin: 10px 0 0;
    padding: 0;
    list-style: none;
  }
  .cr6-card2 .cr6-features-list li {
    display: inline-block;
    margin-right: 20px;
    position: relative;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }
  .cr6-card2 .cr6-features-list li::after {
    content: "";
    width: 1px;
    height: 70%;
    background-color: #8d8d8d;
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .cr6-card2 .cr6-features-list li:last-child {
    margin-right: 0;
  }
  .cr6-card2 .cr6-features-list li:last-child::after {
    display: none;
  }
  .cr6-card2 .cr6-pro-cons-area {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 20px;
  }
  .cr6-card2 .cr6-pro-cons-area .cr6-pros-area,
  .cr6-card2 .cr6-pro-cons-area .cr6-cons-area {
    flex-basis: calc(50% - 24px);
    flex-shrink: none;
  }
  .cr6-card2 .cr6-pro-cons-area ul {
    margin: 0;
    padding-left: 0px;
    list-style: none;
  }
  .cr6-card2 .cr6-pro-cons-area ul li {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 10px;
    padding-left: 20px;
    position: relative;
  }
  .cr6-card2 .cr6-pro-cons-area ul li::before {
    content: "";
    width: 13px;
    height: 13px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='green'%3E%3Cpath d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    position: absolute;
    left: 0px;
    top: 4px;
  }
  .cr6-card2 .cr6-pro-cons-area ul li.cons::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' fill='%23ff0000'%3E%3Cpath d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'/%3E%3C/svg%3E");
  }

  .cr6-card2 .cr6-pro-cons-area:last-child {
    margin-bottom: 0;
  }

  .cr6-card2 .cr6-description p {
      margin-bottom: 0;
  }

  /* Responsive */
  @media (width <= 768px) {
    .cr6-ranked {
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 0px;
    }
    .cr6-ranked .cr6-card:nth-child(2) {
      order: 2;
      margin-top: 0px;
    }
    .cr6-ranked .cr6-card:nth-child(3) {
      order: 3;
      margin-top: 0px;
    }
    .cr6-ranked .cr6-card:first-child {
      order: 1;
      margin-top: 0px;
      transform: scale(1);
    }
    .cr6-card2 .cr6-features-list li {
      display: block;
      margin-top: 5px;
    }
    .cr6-card2 .cr6-features-list li::after {
      display: none;
    }
    .cr6-card2 .cr6-pro-cons-area {
      display: block;
    }
  }
</style>
<?php 
  $counter = 0;
?>
<div class="cr6-wrapper">
    <?php
        foreach ($score_array as $post_id => $data) {
          $er_object   = get_post( $post_id );
          $counter++;
            // For the post fix of ranking
          if($counter == 1) {
            $positionPostfix = 'st';
          } elseif ($counter == 2) {
            $positionPostfix = 'nd';
          } else {
            $positionPostfix = 'rd';
          }
          if($counter <= 3) {
            if($counter == 1) {
              echo '<div class="cr6-ranked">';
            }
            echo '<div class="cr6-card">
            <div class="cr6-ranking"><span>' . $counter .'<sub>'. $positionPostfix .'</sub></span></div>';
            echo ' <div class="cr6-card-content">';
            if ( ! empty( $er_object->post_title ) && $wpas_cr_section_title_show ) {
              echo '<h3><a href="' . $data['button_link'] . '">' . $er_object->post_title . '</a></h3>';
            }
                if ( $wpas_cr_category_list_show ) {
                  echo '<ul class="cr6-features-list">';
                          foreach ( $data['categories'] as $key => $value ) {
                              echo '<li><span>' . $key . '</span> <strong>' . $value . '</strong></li>';
                          }
                  echo '</ul>';
                }
                if ( $wpas_cr_pros_cons_show ) {
                  echo ' <h4 class="cr6-heading">Pros & Cons</h4>
                          <ul class="cr6-pros-cons-list">';
                          foreach ( $data['pros'] as $value ) {
                              echo '<li class="pros">' . $value . '</li>';
                          }
                          foreach ( $data['cons'] as $value ) {
                              echo '<li class="cons">' . $value . '</li>';
                          }
                  echo '</ul>';
                }
                if ( $wpas_cr_desc_show ) {
                  echo '<div class="cr6-description">';
                    echo wpautop( $data['overview'] );
                  echo '</div>';
                }
            echo '</div>';
      echo '</div>';
            if($counter == 3) {
              echo '</div>';
            }
          } else {
            
            echo '<div class="cr6-card2">
            <div class="cr6-ranking"><span>' . $counter . '</span></div>
            <div class="cr6-card-content">';
            if ( ! empty( $er_object->post_title ) && $wpas_cr_section_title_show ) {
              echo '<h3 class="cr6-title"><a href="' . $data['button_link'] . '">' . $er_object->post_title . '</a></h3>';
            }
              if ( $wpas_cr_category_list_show ) { 
                echo '<ul class="cr6-features-list">';
                      foreach ( $data['categories'] as $key => $value ) {
                        echo '<li><span>' . $key . '</span> : <strong>' . $value . '</strong></li>';
                    }
                echo '</ul>';
              }
              if ( $wpas_cr_pros_cons_show ) {
                echo '<div class="cr6-pro-cons-area">';
                    echo '<div class="cr6-pros-area">
                        <h4 class="cr6-heading">Pros:</h4>
                        <ul class="cr6-pros-list">';
                        foreach ( $data['pros'] as $value ) {
                            echo '<li class="pros">' . $value . '</li>';
                        }
                    echo '</ul>
                    </div>';
                    echo '<div class="cr6-cons-area">
                        <h4 class="cr6-heading">Cons:</h4>
                        <ul class="cr6-cons-list">';
                        foreach ( $data['cons'] as $value ) {
                            echo '<li class="cons">' . $value . '</li>';
                        }
                    echo '</ul>
                    </div>';
                echo '</div>';
              }

              if ( $wpas_cr_desc_show ) {
                echo '<div class="cr6-description">';
                  echo wpautop( $data['overview'] );
                echo '</div>';
              }
        echo '</div>
    </div>';

          }

        }
    ?>
</div>








<!-- 


        echo '<div class="cr6-ranked">';
          foreach ($first_three as $post_id => $data) {
            $er_object   = get_post( $post_id );
            $counter++;
            // For the post fix of ranking
            if($counter == 1) {
              $positionPostfix = 'st';
            } elseif ($counter == 2) {
              $positionPostfix = 'nd';
            } else {
              $positionPostfix = 'rd';
            }
              echo '<div class="cr6-card">
                  <div class="cr6-ranking"><span>' . $counter .'<sub>'. $positionPostfix .'</sub></span></div>';
                  echo ' <div class="cr6-card-content">';
                  if ( ! empty( $er_object->post_title ) ) {
                    echo '<h3><a href="' . $data['button_link'] . '">' . $er_object->post_title . '</a></h3>';
                  }
                      if ( $wpas_cr_category_list_show ) {
                        echo '<ul class="cr6-features-list">';
                                foreach ( $data['categories'] as $key => $value ) {
                                    echo '<li><span>' . $key . '</span> <strong>' . $value . '</strong></li>';
                                }
                        echo '</ul>';
                      }
                      if ( $wpas_cr_pros_cons_show ) {
                        echo ' <h4 class="cr6-heading">Pros & Cons</h4>
                                <ul class="cr6-pros-cons-list">';
                                foreach ( $data['pros'] as $value ) {
                                    echo '<li class="pros">' . $value . '</li>';
                                }
                                foreach ( $data['cons'] as $value ) {
                                    echo '<li class="cons">' . $value . '</li>';
                                }
                        echo '</ul>';
                      }
                      if ( $wpas_cr_desc_show ) {
                        echo '<div class="cr6-description">';
                          echo wpautop( $data['overview'] );
                        echo '</div>';
                      }
                  echo '</div>';
            echo '</div>';
          }
        echo '</div>';
        foreach ($rest_of_array as $post_id => $data) {
          $counter++;
            echo '<div class="cr6-card2">
                    <div class="cr6-ranking"><span>' . $counter . '</span></div>
                    <div class="cr6-card-content">';
                      echo '<h3 class="cr6-title"><a href="' . $data['button_link'] . '">' . $er_object->post_title . '</a></h3>';
                      if ( $wpas_cr_category_list_show ) { 
                        echo '<ul class="cr6-features-list">';
                              foreach ( $data['categories'] as $key => $value ) {
                                echo '<li><span>' . $key . '</span> : <strong>' . $value . '</strong></li>';
                            }
                        echo '</ul>';
                      }
                      if ( $wpas_cr_pros_cons_show ) {
                        echo '<div class="cr6-pro-cons-area">';
                            echo '<div class="cr6-pros-area">
                                <h4 class="cr6-heading">Pros:</h4>
                                <ul class="cr6-pros-list">';
                                foreach ( $data['pros'] as $value ) {
                                    echo '<li class="pros">' . $value . '</li>';
                                }
                            echo '</ul>
                            </div>';
                            echo '<div class="cr6-cons-area">
                                <h4 class="cr6-heading">Cons:</h4>
                                <ul class="cr6-cons-list">';
                                foreach ( $data['cons'] as $value ) {
                                    echo '<li class="cons">' . $value . '</li>';
                                }
                            echo '</ul>
                            </div>';
                        echo '</div>';
                      }

                      if ( $wpas_cr_desc_show ) {
                        echo '<div class="cr6-description">';
                          echo wpautop( $data['overview'] );
                        echo '</div>';
                      }
                echo '</div>
            </div>';
        }




-->