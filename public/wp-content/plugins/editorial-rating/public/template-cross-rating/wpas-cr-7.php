<?php
/**
 * Cross Rating Template: 7
 */
  wp_enqueue_style( $this->plugin_name . '-icomoon' );
?>
<style>
  .cr7-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      font-family: system-ui;
  }

  .cr7-filter-area {
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
  }

  .cr7-filter-area #cr7-searchInput {
      padding: 10px 15px;
      border: 1px solid #d4d4d4;
      border-radius: 10px;
  }

  .cr7-filter-area #cr7-searchInput:focus {
      outline: none;
  }

  .cr7-sort-buttons button {
      margin: 0 10px;
      cursor: pointer;
      padding: 8px 15px;
      min-width: 100px;
      text-align: center;
      color: #333333;
      display: inline-block;
      transition: 0.5s ease-in-out;
      background-color: transparent;
      border: 1px solid #d4d4d4;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 700;
  }

  .cr7-sort-buttons button svg {
      width: 15px;
      fill: #333333;
      transition: 0.5s ease-in-out;
      position: relative;
      top: 1px;
      margin-right: 2px;
  }

  .cr7-sort-buttons button:hover {
      background-color: #333333;
      color: #ffffff;
  }

  .cr7-sort-buttons button:hover svg {
      fill: #ffffff;
  }

  .cr7-sort-buttons button:first-child {
      margin-left: 0;
  }

  .cr7-table {
      border-collapse: collapse;
  }

  .cr7-table thead {
      background-color: #333333;
      color: #ffffff;
  }

  .cr7-table thead th {
      padding: 5px 15px;
      border: 1px solid #6e6e6e;
      font-size: 14px;
  }

  .cr7-table .cr7-table-row {
      position: relative;
  }

  .cr7-table .cr7-table-row[data-badgesLabel]::after {
      content: "Editors Choice";
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      padding: 5px 10px;
      background-color: red;
      position: absolute;
      left: -64px;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      transform-origin: center;
  }

  .cr7-table .cr7-table-row td {
      border: 1px solid #eeeeee;
  }

  .cr7-table .cr7-table-row .cr7-sl {
      text-align: center;
      font-size: 16px;
      font-weight: 700;
  }

  .cr7-table .cr7-table-row .cr7-product-img {
      text-align: center;
  }

  .cr7-table .cr7-table-row .cr7-product-img a {
      display: inline-block;
      width: 75px;
      height: 75px;
      border-radius: 10px;
      overflow: hidden;
  }

  .cr7-table .cr7-table-row .cr7-title {
      padding: 5px;
      max-width: 150px;
  }

  .cr7-table .cr7-table-row .cr7-title a {
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      color: #333333;
      text-decoration: none !important;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
  }

  .cr7-table .cr7-table-row .cr7-features,
  .cr7-table .cr7-table-row .cr7-cons,
  .cr7-table .cr7-table-row .cr7-pros {
      max-width: 220px;
      width: 220px;
      padding: 10px;
  }

  .cr7-table .cr7-table-row .cr7-features ul,
  .cr7-table .cr7-table-row .cr7-cons ul,
  .cr7-table .cr7-table-row .cr7-pros ul {
      margin: 0;
      padding: 0;
      list-style: none;
  }

  .cr7-table .cr7-table-row .cr7-features ul li,
  .cr7-table .cr7-table-row .cr7-cons ul li,
  .cr7-table .cr7-table-row .cr7-pros ul li {
      font-size: 16px;
      line-height: 20px;
      padding-left: 24px;
      position: relative;
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      gap: 5px;
  }

  .cr7-table .cr7-table-row .cr7-features ul li::before,
  .cr7-table .cr7-table-row .cr7-cons ul li::before,
  .cr7-table .cr7-table-row .cr7-pros ul li::before {
      content: "";
      width: 15px;
      height: 15px;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z'/%3E%3C/svg%3E");
      position: absolute;
      left: 0;
      top: 4px;
  }

  .cr7-table .cr7-table-row .cr7-features ul li.pros::before,
  .cr7-table .cr7-table-row .cr7-cons ul li.pros::before,
  .cr7-table .cr7-table-row .cr7-pros ul li.pros::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z'/%3E%3C/svg%3E");
  }

  .cr7-table .cr7-table-row .cr7-features ul li.cons::before,
  .cr7-table .cr7-table-row .cr7-cons ul li.cons::before,
  .cr7-table .cr7-table-row .cr7-pros ul li.cons::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16H286.5c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8H384c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H32z'/%3E%3C/svg%3E");
  }

  .cr7-table .cr7-table-row .cr7-features ul li:first-child,
  .cr7-table .cr7-table-row .cr7-cons ul li:first-child,
  .cr7-table .cr7-table-row .cr7-pros ul li:first-child {
      margin-top: 0;
  }

  .cr7-table .cr7-table-row .cr7-rating {
      text-align: center;
  }

  .cr7-table .cr7-table-row .cr7-rating span {
    display: block;
    font-size: 12px;
    font-weight: 500;
  }

  .cr7-table .cr7-table-row .cr7-rating svg {
      width: 15px;
      height: 15px;
      position: relative;
      top: 1px;
  }

  .cr7-table .cr7-table-row .cr7-btns {
      width: 110px;
      text-align: center;
      padding: 15px 10px;
      position: relative;
  }

  .cr7-table .cr7-table-row .cr7-btns .cr7-btn {
    font-size: 14px;
    line-height: 1.43;
    padding: 5px 15px;
    border-radius: 5px;
    color: #ffffff;
    display: inline-block;
    transition: 0.5s ease-in-out;
    text-decoration: none !important;
    border: 1px solid #333333;
    background-color: #333333;
    margin-bottom: 15px;
  }

  .cr7-table .cr7-table-row .cr7-btns .cr7-btn:hover {
    color: #333333;
    background-color: #ffffff;
  }

  .cr7-table .cr7-table-row .cr7-btns .cr7-btn:last-child {
    margin-bottom: 0;
  }

  .cr7-table .cr7-table-row .cr7-btns .cr7-edit-btn {
    background-color: transparent !important;
    font-size: 12px;
    padding: 0 5px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .cr7-table .cr7-table-row .cr7-btns .cr7-edit-btn SVG {
    width: 10px;
    margin-left: 5px;
  }

  @media screen and (max-width: 900px) {
      .cr7-table {
        border: 0;
      }

      .cr7-table caption {
        font-size: 1.3em;
      }

      .cr7-table thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .cr7-table tr {
        display: block;
        margin-bottom: 25px;
      }

      .cr7-table td {
            border-bottom: 1px solid #ddd;
            display: block;
            font-size: 0.8em;
            text-align: left;
            position: relative;
            padding-left: 150px !important;
        }

      .cr7-table td::before {
          content: attr(data-label);
          font-size: 13px;
          font-weight: bold;
          text-transform: capitalize;
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
        }

      .cr7-table td:last-child {
          border-bottom: 0;
        }

      .cr7-filter-area {
          flex-wrap: wrap;
          justify-content: center;
        }

      .cr7-table {
          width: 100%;
        }
      
      .cr7-table .cr7-table-row .cr7-features,
      .cr7-table .cr7-table-row .cr7-cons,
      .cr7-table .cr7-table-row .cr7-pros,
      .cr7-table .cr7-table-row .cr7-title,
      .cr7-table .cr7-table-row .cr7-btns,
      .cr7-table .cr7-table-row .cr7-rating,
      .cr7-table .cr7-table-row .cr7-product-img,
      .cr7-table .cr7-table-row .cr7-sl {
          max-width: 100%;
          width: unset;
          text-align: left;
          padding: 15px;
        }

      .cr7-table .cr7-table-row .cr7-btns a {
          margin: 0;
        }

      .cr7-table .cr7-table-row:first-child::after {
          left: unset;
          top: 0;
          right: 0;
          transform: unset;
        }
  }
</style>

<?php 
    $cardNo = 0;
?>

<div class="cr7-wrapper">
  <div class="cr7-filter-area">
    <?php
        if($wpas_cr_user_rating_star_show) {
            echo '
                <div class="cr7-sort-buttons">
                    <button onclick="sortTable(\'ratingAsc\')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32 32s-14.3 32-32 32H320z" />
                        </svg>
                        Sort by Rating
                    </button>
                    <button onclick="sortTable(\'ratingDesc\')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320z" />
                        </svg>
                        Sort by Rating
                    </button>
                </div>
            ';
        }
    ?>
      <div class="search-container">
          <input type="text" id="cr7-searchInput" onkeyup="searchTable()" placeholder="Search for product name...">
      </div>
  </div>
  <table id="cr7-productTable" class="cr7-table">
      <thead>
          <tr>
              <th>ID</th>
              <?php 
                  if ( $wpas_product_img_show ) {
                      echo '<th>Product Image</th>';
                  }
              ?>
              <?php 
                if ( $wpas_cr_section_title_show) {
                    echo '<th>Product Name</th>';
                }
              ?>
              <?php if ( $wpas_cr_category_list_show ) {
                  echo '<th>Key Features</th>';
              } ?>
              <?php if ( $wpas_cr_pros_cons_show ) {
                  echo '<th>Pros</th>
                  <th>Cons</th>';
               }?>
               <?php   if ($wpas_cr_user_rating_star_show) {
                   echo '<th>Rating</th>';
               }?>
              <th>Action</th>
          </tr>
      </thead>
      <tbody>
        <?php  foreach ( $score_array as $post_id => $data ) {
            $cardNo++;
            $er_object   = get_post( $post_id );
            $er_edit_url = get_admin_url() . 'post.php?post=' . $post_id . '&action=edit';
            echo '<tr class="cr7-table-row"';   echo $cardNo == 1 ? 'data-badgesLabel="'. $wpas_cr_hl_label .'">' : '>';
                echo '<td data-label="Id" class="cr7-sl">' . $post_id . '</td>';
                if ( $wpas_product_img_show ) { 
                    echo '<td data-label="Product image" class="cr7-product-img">
                        <a href="' . $data['button_link'] . '"><img src="' . $data['product_img'] . '" alt=""></a>
                    </td>';
                }

                if ( ! empty( $er_object->post_title ) && $wpas_cr_section_title_show) {
                    echo '<td data-label="Product name" class="cr7-title"><a href="' . $data['button_link'] . '">' . $er_object->post_title . '</a></td>';
                }
                if ( $wpas_cr_category_list_show ) {
                    echo '<td data-label="Key Features" class="cr7-features">
                            <ul>';
                            foreach ( $data['categories'] as $key => $value ) {
                                echo '<li><span>' . $key . ':</span> <strong>' . $value . '</strong></li>';
                            }
                    echo '</ul>';
                }
                if ( $wpas_cr_pros_cons_show ) { 
                    echo '<td data-label="Pros" class="cr7-pros">
                            <ul>';
                            foreach ( $data['pros'] as $value ) {
                                echo '<li class="pros">' . $value . '</li>';
                            }
                    echo '</ul>
                    </td>';
                    echo '<td data-label="Cons" class="cr7-cons">
                            <ul>';
                            foreach ( $data['cons'] as $value ) {
                                echo '<li class="cons">' . $value . '</li>';
                            }
                    echo '</ul>
                    </td>';
                }
                if ($wpas_cr_user_rating_star_show) {
                    echo '<td data-label="Rating" class="cr7-rating"> ' . $data['score'] . '
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <br/><span>(' . $data['total_vote'] . ' reviews) </span>
                    </td>';
                }
                echo '<td data-label="Action" class="cr7-btns">';
                            if ( is_user_logged_in() ) {
                                echo '<a href="' . $er_edit_url . '" class="cr7-edit-btn">Edit <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg></a>';
                            }
                            echo '<a href="' . $data['button_link'] . '" class="cr7-btn">Buy Now</a>
                        </td>';
            echo '</tr>';
        }?>
      </tbody>
  </table>
</div>
<script>
    // Table sorting based on rating
    function sortTable(order) {
        const table = document.getElementById("cr7-productTable");
        const tbody = table.tBodies[0];
        const rows = Array.from(tbody.rows);
        rows.sort((a, b) => {
            const ratingA = parseFloat(a.querySelector('.cr7-rating').innerText);
            const ratingB = parseFloat(b.querySelector('.cr7-rating').innerText);
            switch (order) {
                case "ratingAsc":
                    return ratingA - ratingB;
                case "ratingDesc":
                    return ratingB - ratingA;
                default:
                    return 0;
            }
        });
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
        rows.forEach(row => tbody.appendChild(row));
    }
    // Search Function
    function searchTable() {
        const input = document.getElementById("cr7-searchInput");
        const filter = input.value.toUpperCase();
        const table = document.getElementById("cr7-productTable");
        const tbody = table.tBodies[0];
        const rows = tbody.rows;

        for (let i = 0; i < rows.length; i++) {
            const productName = rows[i].cells[2].innerText.toUpperCase();
            if (productName.indexOf(filter) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
</script>
