# Wagon Starter

## Setup

Ensure Ruby and Yarn installed. Then run the following

```
bundle install
yarn install
```
## Local Dev

To start servers:

```
yarn run watch # (laravel mix / webpack)

bundle exec wagon serve
```

I also find it easier to use some sort of application manager for this, a longtime favourite is Hotel - https://github.com/typicode/hotel

## Deploy

```
be wagon deploy <environment> -v
```

To seed the database using `/data/*.yml` files simply add the `-d` option.

Warning the `-d` option will re-write seed data even if they have previously been deleted or renamed

## Guides
- Official Docs: https://doc.locomotivecms.com/v4.0/docs
- Repository: https://github.com/locomotivecms/wagon
- Outdated but gives better n00b description of things: http://doc-v2.locomotivecms.com/making-blog/1-1-create-wagon-site
- TGV, Locomotive Code Snippets, etc: https://tgv.studiowan.fr/list?type=actions
- Web App Example: https://github.com/manuchap/Tgv/

## Bootstrap Theming
- Bootstrap 4 Full Themes - Start from any pre-designed Bootstrap 4 template:
  * https://cssauthor.com/bootstrap-templates/
  * https://startbootstrap.com/themes/
  * https://themes.getbootstrap.com/ (Paid Themes)
  * https://wrapbootstrap.com/ (Paid Themes)
  * https://w3layouts.com/ (Good quality themes, but hard to tell whats Bootstrap 4 compatible)
- Bootstrap 4 Snippets:
  * https://github.com/froala/design-blocks
  * https://startbootstrap.com/snippets/
  * https://bootsnipp.com/
  * https://getbootstrap.com/docs/4.3/examples/
- Bootswatch Custom Theming - choose from any base bootswatch theme on https://bootswatch.com/
