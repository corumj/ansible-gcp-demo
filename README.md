# Ansible GCP Demo

This demo will kickoff the discussion about Ansible Integration with a silly example.  Let's check the weather in Reykjavik Iceland and if it's cold, deploy a simple demo app showing ocean surface temperature.  If it's hot, we'll deploy an app showing earthquakes around the Ring of Fire (because why not).  

Not that you would do something this whimsical in real life but think about using APIs that can provide critical decision making data for Ansible playbooks.  For example, Ansible can check be scheduled to check the weather throughout the winter months for a blizzard in the forcast and spin up extra instances of a snowplow tracking application you use to communicate to your community.   


### Requirements
You need a Google Cloud Account with billing setup.

A Project setup for OS Login

A Service Account (these instruction were handy: [How to configure OS Login in GCP for Ansible](https://alex.dzyoba.com/blog/gcp-ansible-service-account/))

Also good to follow the steps to setup the GCP Dynamic Inventory plugin [Ansible Google Cloud Platform Guide](https://docs.ansible.com/ansible/latest/scenario_guides/guide_gce.html)

Some other stuff I'm probably forgetting, good luck.